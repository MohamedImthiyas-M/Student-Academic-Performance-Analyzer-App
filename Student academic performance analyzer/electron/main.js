const { app, BrowserWindow, dialog, ipcMain, shell } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 950,
    minWidth: 1100,
    minHeight: 700,
    backgroundColor: '#f4f7fb',
    title: 'Student Academic Performance Analyzer',
    titleBarStyle: 'default',
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });
  mainWindow.loadFile(path.join(__dirname, '..', 'index.html'));
  mainWindow.once('ready-to-show', () => mainWindow.show());
}

ipcMain.handle('save-pdf', async () => {
  if (!mainWindow) return { cancelled: true };
  const result = await dialog.showSaveDialog(mainWindow, {
    title: 'Save Student Performance Report as PDF',
    defaultPath: `Student-Academic-Performance-Report-${new Date().toISOString().slice(0,10)}.pdf`,
    filters: [{ name: 'PDF files', extensions: ['pdf'] }]
  });
  if (result.canceled || !result.filePath) return { cancelled: true };
  const pdf = await mainWindow.webContents.printToPDF({
    printBackground: true,
    pageSize: 'A4',
    margins: { marginType: 'custom', top: 0, bottom: 0, left: 0, right: 0 },
    landscape: false
  });
  fs.writeFileSync(result.filePath, pdf);
  await shell.openPath(result.filePath);
  return { cancelled: false, filePath: result.filePath };
});

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
