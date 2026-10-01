@echo off
cd /d "%~dp0"
echo Installing desktop dependencies...
npm install
if errorlevel 1 pause & exit /b 1
echo Building Windows installer and portable EXE...
npm run dist
pause
