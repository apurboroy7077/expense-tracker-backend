"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const startGameOfTheRoom_1 = __importDefault(require("./start-game-of-the-room/startGameOfTheRoom"));
const startGame = (dataFromClient) => {
    const { roomId, playerId } = dataFromClient;
    (0, startGameOfTheRoom_1.default)(roomId);
};
exports.default = startGame;
