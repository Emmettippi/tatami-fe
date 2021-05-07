import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow;

function createWindow() {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `/../../dist/tatami-fe/index.html`),
            protocol: 'file:',
            slashes: true,
        })
    );

    // win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

ipcMain.on('close-me', (evt, arg) => {
    app.quit();
})

app.on('ready', createWindow);

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
