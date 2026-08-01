import os
import subprocess
import sys
import datetime
from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import Optional
from fastapi.responses import HTMLResponse
import urllib.parse

app = FastAPI(title="观澜命理 · Lan.Destiny Server")

# Mount frontend
app.mount("/static", StaticFiles(directory="static"), name="static")

# Robust PYTHON_PATH selection
PYTHON_PATH = os.path.expandvars(r"%USERPROFILE%\AppData\Local\Programs\Python\Python312\python.exe")
if not os.path.exists(PYTHON_PATH):
    # Fallback to current running Python executable
    PYTHON_PATH = sys.executable

SKILL_DIR = r"C:\Users\杨鲁斌\.claude\skills\bazi-mingli"
SCRIPTS_DIR = os.path.join(SKILL_DIR, "scripts")

class CalcRequest(BaseModel):
    module: str
    gender: Optional[str] = "male"
    calendar: Optional[str] = "solar"
    year: Optional[int] = None
    month: Optional[int] = None
    day: Optional[int] = None
    hour: Optional[int] = None
    minute: Optional[int] = None
    lng: Optional[float] = None
    partner_year: Optional[int] = None
    partner_month: Optional[int] = None
    partner_day: Optional[int] = None
    partner_hour: Optional[int] = None
    partner_minute: Optional[int] = None
    type: Optional[str] = None
    numbers: Optional[str] = None
    query: Optional[str] = None
    yao: Optional[str] = None
    ju_fa: Optional[str] = None
    use_json: Optional[bool] = False

class ExportRequest(BaseModel):
    title: str
    html_content: str

@app.post("/api/calculate")
def calculate(req: CalcRequest):
    args = []
    script = ""

    if req.module == "bazi":
        script = "paipan.py"
        args = [str(req.year), str(req.month), str(req.day)]
        if req.hour is not None:
            args.append(str(req.hour))
            if req.minute is not None:
                args.append(str(req.minute))
        args.extend(["--gender", req.gender])
        if req.calendar == "lunar":
            args.append("--lunar")
        if req.lng is not None:
            args.extend(["--lng", str(req.lng)])
    
    elif req.module == "ziwei":
        script = "ziwei.py"
        args = [str(req.year), str(req.month), str(req.day), str(req.hour or 0), str(req.minute or 0)]
        args.extend(["--gender", req.gender])
        if req.calendar == "lunar":
            args.append("--lunar")

    elif req.module == "hehun":
        script = "paipan.py"
        args = [str(req.year), str(req.month), str(req.day)]
        if req.hour is not None:
            args.append(str(req.hour))
            if req.minute is not None:
                args.append(str(req.minute))
        args.extend(["--gender", "male", "--partner", str(req.partner_year), str(req.partner_month), str(req.partner_day)])
        if req.partner_hour is not None:
            args.append(str(req.partner_hour))
            if req.partner_minute is not None:
                args.append(str(req.partner_minute))
        args.extend(["--partner-gender", "female"])

    elif req.module == "meihua":
        script = "meihua.py"
        if req.type == "numbers":
            nums = req.numbers.split() if req.numbers else []
            if len(nums) == 3:
                try:
                    a, b, c = int(nums[0]), int(nums[1]), int(nums[2])
                    def _mod(v, m):
                        r = v % m
                        return m if r == 0 else r
                    args.extend(["--gua", str(_mod(a, 8)), str(_mod(b, 8)), str(_mod(c, 6))])
                except ValueError:
                    raise HTTPException(status_code=400, detail="Invalid numbers for Meihua")
            elif len(nums) == 2:
                args.extend(["--numbers", nums[0], nums[1]])
            else:
                raise HTTPException(status_code=400, detail="Two or three numbers required for Meihua")
        else:
            now = datetime.datetime.now()
            y = req.year or now.year
            m = req.month or now.month
            d = req.day or now.day
            h = req.hour if req.hour is not None else now.hour
            mi = req.minute if req.minute is not None else now.minute
            args.extend(["--time", str(y), str(m), str(d), str(h), str(mi)])
            if req.calendar == "lunar":
                args.append("--lunar")
        if req.query:
            args.extend(["--query", req.query])

    elif req.module == "liuyao":
        script = "liuyao.py"
        args.extend(["--yao", req.yao])
        
        now = datetime.datetime.now()
        if req.year is None:
            y = now.year
            m = now.month
            d = now.day
            h = req.hour if req.hour is not None else now.hour
            mi = req.minute if req.minute is not None else now.minute
            date_args = [str(y), str(m), str(d), str(h), str(mi)]
        else:
            date_args = [str(req.year), str(req.month), str(req.day)]
            if req.hour is not None:
                date_args.append(str(req.hour))
                if req.minute is not None:
                    date_args.append(str(req.minute))
        
        args.extend(["--date"] + date_args)
        if req.query:
            args.extend(["--query", req.query])

    elif req.module == "qimen":
        script = "qimen.py"
        now = datetime.datetime.now()
        y = req.year or now.year
        m = req.month or now.month
        d = req.day or now.day
        h = req.hour if req.hour is not None else now.hour
        args.extend([str(y), str(m), str(d), str(h)])
        if req.minute is not None:
            args.append(str(req.minute))
        if req.ju_fa:
            args.extend(["--ju-fa", req.ju_fa])

    else:
        raise HTTPException(status_code=400, detail=f"Unknown module: {req.module}")

    if req.use_json:
        args.append("--json")

    script_path = os.path.join(SCRIPTS_DIR, script)
    if not os.path.exists(script_path):
        raise HTTPException(status_code=500, detail=f"Script {script} not found in skill folder")

    cmd = [PYTHON_PATH, "-X", "utf8", script_path] + args
    
    try:
        env = os.environ.copy()
        env["PYTHONIOENCODING"] = "utf-8"
        res = subprocess.run(cmd, env=env, capture_output=True, text=True, check=True, encoding="utf-8")
        return {"stdout": res.stdout, "stderr": res.stderr}
    except subprocess.CalledProcessError as e:
        error_msg = e.stderr or e.stdout or str(e)
        raise HTTPException(status_code=400, detail=f"Process execution failed: {error_msg.strip()}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Server error executing command: {str(e)}")

@app.post("/api/export")
def export_report(req: ExportRequest):
    full_html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>{req.title} - 观澜命理</title>
    <style>
        body {{
            background-color: #000000;
            color: #FFFFFF;
            font-family: 'Inter', sans-serif;
            padding: 40px;
        }}
        .report-content {{
            max-width: 800px;
            margin: 0 auto;
            background-color: #0B0B0B;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-top: 4px solid #EE0BA9;
            box-shadow: 0 4px 20px rgba(238, 11, 169, 0.15);
            border-radius: 12px;
            padding: 30px;
        }}
        h1 {{
            color: #EE0BA9;
            border-bottom: 1px solid rgba(238, 11, 169, 0.2);
            padding-bottom: 10px;
        }}
        h2, h3, h4 {{
            color: #FCC84E;
        }}
        pre {{
            background: #151515;
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
        }}
    </style>
</head>
<body>
    <div class="report-content">
        {req.html_content}
    </div>
</body>
</html>"""
    
    headers = {
        "Content-Disposition": f"attachment; filename={urllib.parse.quote(req.title)}.html"
    }
    return HTMLResponse(content=full_html, headers=headers)

@app.get("/")
def read_root():
    from fastapi.responses import RedirectResponse
    return RedirectResponse(url="/static/index.html")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="127.0.0.1", port=8000, reload=True)
