@echo off
echo ========================================
echo   Pixkit Vehicle - Starting...
echo ========================================
echo.
call npm install
echo.
start /B npm run dev
timeout /t 3 /nobreak >nul
start http://localhost:5173
echo.
echo Press any key to stop the server...
pause >nul
taskkill /F /IM node.exe
