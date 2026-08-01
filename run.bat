@echo off
title 观澜命理 · Lan.Destiny Dashboard Launcher
echo ===================================================
echo   正在启动 观澜命理 · Lan.Destiny 本地服务...
echo ===================================================
echo.

set PYTHON_EXE=%USERPROFILE%\AppData\Local\Programs\Python\Python312\python.exe

if not exist "%PYTHON_EXE%" (
    echo [错误] 找不到 Python 3.12 安装路径: %PYTHON_EXE%
    echo 请检查 Python 是否成功安装。
    pause
    exit /b
)

:: Start browser after 2 seconds
start /b cmd /c "timeout /t 2 >nul && start http://127.0.0.1:8000"

:: Start FastAPI server
"%PYTHON_EXE%" -m uvicorn server:app --host 127.0.0.1 --port 8000 --reload

pause
