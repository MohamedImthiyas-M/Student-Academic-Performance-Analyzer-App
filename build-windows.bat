@echo off
setlocal
title Student Academic Performance Analyzer - Windows Build
cd /d "%~dp0"

echo.
echo ================================================
echo  Student Academic Performance Analyzer
echo  Windows Desktop Build
echo ================================================
echo.

echo [1/2] Installing dependencies...
call npm install
if errorlevel 1 (
    echo.
    echo ERROR: npm install failed.
    pause
    exit /b 1
)

echo.
echo [2/2] Building Windows installer and portable EXE...
call npm run dist
if errorlevel 1 (
    echo.
    echo ERROR: npm run dist failed.
    pause
    exit /b 1
)

echo.
echo ================================================
echo  BUILD COMPLETED SUCCESSFULLY
echo  Check the "dist" folder for the EXE files.
echo ================================================
echo.
pause
endlocal
