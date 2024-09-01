"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stopTheGameNow_1 = __importDefault(require("./stop-it/stopTheGameNow"));
const stopGame = (dataFromClient) => {
    const { roomId } = dataFromClient;
    (0, stopTheGameNow_1.default)(roomId);
};
exports.default = stopGame;
