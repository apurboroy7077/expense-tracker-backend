"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createRoomController_1 = __importDefault(require("../../controllers/game/createRoom/createRoomController"));
const joinRoomController_1 = __importDefault(require("../../controllers/game/join-room/joinRoomController"));
const gameRouter = express_1.default.Router();
gameRouter.post("/create-room", createRoomController_1.default);
gameRouter.post("/join-room", joinRoomController_1.default);
exports.default = gameRouter;
