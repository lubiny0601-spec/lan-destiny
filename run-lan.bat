@echo off
@chcp 65001 >nul
title Lan.Destiny - LAN mode (phone + PC)
echo ===================================================
echo   Lan.Destiny  -  LAN mode: PC + phone on same WiFi
echo ===================================================
echo.

set "PYTHON_EXE="
where python >nul 2>nul
if %ERRORLEVEL% equ 0 set "PYTHON_EXE=python"
if not defined PYTHON_EXE if exist "%USERPROFILE%\AppData\Local\Programs\Python\Python312\python.exe" set "PYTHON_EXE=%USERPROFILE%\AppData\Local\Programs\Python\Python312\python.exe"

if not defined PYTHON_EXE (
    echo [ERROR] Python not found.
    echo         Install Python 3.10+ and add it to PATH, or set BAZI_PYTHON.
    pause
    exit /b 1
)

rem --- find the LAN IPv4 of this machine ---
set "LAN_IP="
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    for /f "tokens=* delims= " %%b in ("%%a") do set "LAN_IP=%%b"
)
rem prefer 192.168.x.x if multiple adapters exist
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4" ^| findstr /c:"192.168."') do (
    for /f "tokens=* delims= " %%b in ("%%a") do set "LAN_IP=%%b"
)

echo Using interpreter: %PYTHON_EXE%
if defined LAN_IP (
    echo.
    echo   Phone ^(same WiFi^)  ->  http://%LAN_IP%:8000
    echo   This PC             ->  http://127.0.0.1:8000
    echo.
    echo   If the phone cannot open it, allow Python through Windows Firewall
    echo   ^(see README: 手机使用专业版^).
) else (
    echo.
    echo   [WARN] Could not detect a LAN IPv4. Run: ipconfig
)
echo.
echo   Keep this window open while you use it. Ctrl+C to stop.
echo.

start /b cmd /c "timeout /t 2 >nul && start http://127.0.0.1:8000"

"%PYTHON_EXE%" -m uvicorn server:app --host 0.0.0.0 --port 8000 --reload

pause
