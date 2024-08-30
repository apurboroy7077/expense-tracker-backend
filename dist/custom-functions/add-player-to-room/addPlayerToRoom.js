"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getGamingData_1 = __importDefault(require("../../socket/functions/get-gaming-data/getGamingData"));
const saveGamingData_1 = __importDefault(require("../file-system/saveGamingData"));
const roomIdMaker_1 = __importDefault(require("../roomIdMaker.ts/roomIdMaker"));
const addPlayerToRoom = (roomId, playerName) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newPlayerData = {
                name: playerName,
                id: (0, roomIdMaker_1.default)(),
                score: 0,
                lastRequestTimeStamp: Date.now(),
            };
            const dataForClient = {
                playerName: playerName,
                playerId: newPlayerData.id,
            };
            const gameData = yield (0, getGamingData_1.default)();
            let isRoomExists = false;
            for (let i = 0; i < gameData.length; i++) {
                if (gameData[i].roomId === roomId) {
                    isRoomExists = true;
                    gameData[i].usersData.push(newPlayerData);
                    console.log(gameData[i]);
                    dataForClient.roomName = gameData[i].roomName;
                    dataForClient.roomId = gameData[i].roomId;
                }
            }
            if (isRoomExists === true) {
                yield (0, saveGamingData_1.default)(gameData);
                resolve(dataForClient);
            }
            else {
                reject("Room Does not Exists");
            }
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.default = addPlayerToRoom;
