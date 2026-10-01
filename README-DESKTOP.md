# Student Academic Performance Analyzer — Windows Desktop App

This version runs as a standalone Electron desktop application. It opens in its own application window and does **not** use Chrome/Edge or an HTTP/local server.

## Build the Windows application
1. Install Node.js LTS on Windows once.
2. Open this folder in Command Prompt/PowerShell.
3. Run `npm install`.
4. Run `npm run dist`.
5. Open the generated `dist` folder.

You will get both:
- an NSIS installer (`.exe`)
- a portable Windows `.exe`

After installation, launch **Student Academic Performance Analyzer** from the desktop/Start Menu.

All student data and application logic remain local/offline.
