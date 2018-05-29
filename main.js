const {app, BrowserWindow,ipcMain} = require('electron');
const path = require('path');
const url = require('url');
let win;
let masterLogin = 'admin';
let masterPassword = 'admin';

  function createWindow () {
    win = new BrowserWindow({width: 800, height: 600})
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'login.html'),
      protocol: 'file:',
      slashes: true
    }))
    win.maximize();
    win.setResizable(false);
    //win.webContents.openDevTools()

    win.on('closed', () => {
      win = null
    })
  }

  app.on('ready', createWindow)

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })

  ipcMain.on('adm:login', (event, user, pass) => {
  if (user == masterLogin && pass == masterPassword ){
    win.loadURL(`file://${__dirname}/index.html`);
  } else {
    win.webContents.send('adm:loginfail');

  }
})
