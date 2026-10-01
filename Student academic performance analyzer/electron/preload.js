const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('desktopPrintAPI', {
  savePDF: () => ipcRenderer.invoke('save-pdf')
});
contextBridge.exposeInMainWorld('desktopPrint', () => ipcRenderer.invoke('save-pdf'));
