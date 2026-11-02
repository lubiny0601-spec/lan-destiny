@echo off
@chcp 65001 >nul
title Lan.Destiny - local server launcher
echo ===================================================
echo   Lan.Destiny  -  starting local server ...
echo ===================================================
echo.

set "PYTHON_EXE="
where python >nul 2>nul
if %ERRORLEVEL% equ 0 set "PYTHON_EXE=python"
if not defined PYTHON_EXE if exist "%USERPROFILE%\AppData\Local\Programs\Python\Python312\python.exe" set "PYTHON_EXE=%USERPROFILE%\AppData\Local\Programs\Python\Python312\python.exe"

if not defined PYTHON_EXE (
    echo [ERROR] Python not found.
    echo         Install Python 3.10+ and either add it to PATH, or set BAZI_PYTHON.
    pause
    exit /b 1
)

echo Using interpreter: %PYTHON_EXE%
echo Consumer mode (personal structure report) works fully offline in the browser.
echo Pro workstation uses the bundled engines folder of this repo; override with BAZI_SKILL_DIR if needed.
echo Opening http://127.0.0.1:8000 in 2 seconds ...
echo.

start /b cmd /c "timeout /t 2 >nul && start http://127.0.0.1:8000"

"%PYTHON_EXE%" -m uvicorn server:app --host 127.0.0.1 --port 8000 --reload

pause