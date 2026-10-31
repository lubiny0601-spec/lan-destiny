import os
import subprocess
import sys
import datetime
import html as html_lib
from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import Optional
from fastapi.responses import HTMLResponse
import urllib.parse

app = FastAPI(title="观澜命理 · Lan.Destiny Server")

# Mount frontend
app.mount("/static", StaticFiles(directory="static"), name="static")

# Python interpreter used to run the命理 scripts: explicit env override wins,
# otherwise reuse the interpreter that is already running this server.
PYTHON_PATH = os.environ.get("BAZI_PYTHON") or sys.executable
if not os.path.exists(PYTHON_PATH):
    PYTHON_PATH = sys.executable

# 命理脚本目录：环境变量 > ~/.claude/skills/bazi-mingli（不再写死任何用户名）
SKILL_DIR = os.environ.get("BAZI_SKILL_DIR") or str(Path.home() / ".claude" / "skills" / "bazi-mingli")
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
        raise HTTPException(
            status_code=503,
            detail=(
                f"未找到命理脚本 {script}。专业工作台需要本地命理脚本目录："
                f"当前为 {SKILL_DIR}；可用环境变量 BAZI_SKILL_DIR 指向你自己的 bazi-mingli 目录。"
                f"消费者模式（个人说明书）不依赖该目录，可直接使用。"
            )
        )

    cmd = [PYTHON_PATH, "-X", "utf8", script_path] + args
    
    try:
        env = os.environ.copy()
        env["PYTHONIOENCODING"] = "utf-8"
        res = subprocess.run(cmd, env=env, capture_output=True, text=True, check=True, encoding="utf-8", timeout=15)
        return {"stdout": res.stdout, "stderr": res.stderr}
    except subprocess.TimeoutExpired:
        raise HTTPException(status_code=504, detail="推演进程执行超时（15秒熔断防护），请检查输入参数或稍后重试。")
    except subprocess.CalledProcessError as e:
        error_msg = e.stderr or e.stdout or str(e)
        raise HTTPException(status_code=400, detail=f"Process execution failed: {error_msg.strip()}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Server error executing command: {str(e)}")

@app.get("/api/health")
def health():
    """让前端能判断专业模式是否可用（消费者模式不需要它）。"""
    return {
        "ok": True,
        "consumer_mode": "always-available",
        "skill_dir": SKILL_DIR,
        "scripts_found": os.path.isdir(SCRIPTS_DIR),
        "pro_mode": os.path.isdir(SCRIPTS_DIR),
        "python": PYTHON_PATH,
    }


@app.post("/api/export")
def export_report(req: ExportRequest):
    safe_title = html_lib.escape(req.title)
    full_html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{safe_title} · 观澜命理 Lan.Destiny</title>
    <style>
        :root {{
            --green: #006241;
            --green-accent: #00754A;
            --gold: #cba258;
            --cream: #f2f0eb;
            --ink: rgba(0, 0, 0, 0.87);
            --soft: rgba(0, 0, 0, 0.58);
            --hairline: rgba(0, 0, 0, 0.08);
        }}
        body {{
            background-color: var(--cream);
            color: var(--ink);
            font-family: 'Inter', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
            line-height: 1.75;
            padding: 40px 20px;
        }}
        .report-content {{
            max-width: 820px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid var(--hairline);
            border-top: 3px solid var(--green);
            border-radius: 12px;
            padding: 36px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }}
        h1 {{
            color: var(--green);
            font-family: 'Songti SC', 'Noto Serif SC', Georgia, serif;
            font-size: 1.6rem;
            border-bottom: 1px solid var(--hairline);
            padding-bottom: 12px;
            margin-top: 0;
        }}
        h2, h3, h4 {{ color: var(--green-accent); }}
        h2 {{ font-size: 1.15rem; }}
        strong {{ color: var(--green); }}
        pre {{
            background: #f9f9f9;
            border: 1px solid var(--hairline);
            padding: 14px;
            border-radius: 8px;
            overflow-x: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
            font-size: 0.86rem;
            color: var(--soft);
        }}
        table {{ border-collapse: collapse; width: 100%; }}
        th, td {{ border: 1px solid var(--hairline); padding: 8px 10px; font-size: 0.9rem; }}
        .report-footer {{
            margin-top: 28px;
            padding-top: 14px;
            border-top: 1px dashed rgba(0, 0, 0, 0.12);
            font-size: 0.8rem;
            color: var(--soft);
        }}
        @media print {{
            body {{ background: #ffffff; padding: 0; }}
            .report-content {{ border: none; box-shadow: none; padding: 0; }}
        }}
    </style>
</head>
<body>
    <div class="report-content">
        {req.html_content}
        <div class="report-footer">观澜 Lan.Destiny · 本报告由本机浏览器与本地排盘脚本计算生成，仅作自我观察参考，不构成预测或重大决策依据。</div>
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
