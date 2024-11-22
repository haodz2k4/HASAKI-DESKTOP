const {app, BrowserWindow } = require("electron");

let mainWindow;


app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1700,
        height: 1400,
        webPreferences: {
          nodeIntegration: true,
        },
      });
    
      mainWindow.loadFile('../renderer/views/home/home.html'); 
      mainWindow.on('closed', () => {
        mainWindow = null;
      });
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
});
  
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});