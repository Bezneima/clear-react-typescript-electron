import {BrowserWindow, ipcMain} from "electron";

function initApiForWindow(mainWindow:BrowserWindow) {
    ipcMain.on("toMain", (event, args) => {
        console.log("Get message from Renderer:", args);
        mainWindow.webContents.send("fromMain", "arguments");
    });
}
export default initApiForWindow;
