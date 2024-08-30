"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const sendGamingDataToUsers_1 = __importDefault(require("./functions/send-gaming-data-to-users/sendGamingDataToUsers"));
const refineGamingData_1 = __importDefault(require("./functions/refine-gaming-data/refineGamingData"));
const httpServer = (0, http_1.createServer)();
const socket = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "*",
    },
});
socket.on("connect", (mySocket) => {
    mySocket.emit("message", "I am a message from server");
    mySocket.on("getGamingData", (data) => {
        (0, sendGamingDataToUsers_1.default)(mySocket, data);
    });
    mySocket.on("startGame", (data) => { });
});
const port = 5007;
httpServer.listen(port, () => {
    console.log(`Socket Server is started at http://localhost:${port}`);
    setInterval(() => {
        (0, refineGamingData_1.default)();
    }, 1000);
});
