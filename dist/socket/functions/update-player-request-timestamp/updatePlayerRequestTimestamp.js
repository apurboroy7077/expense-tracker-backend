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
const getGamingData_1 = __importDefault(require("../get-gaming-data/getGamingData"));
const saveGamingData_1 = __importDefault(require("../../../custom-functions/file-system/saveGamingData"));
const updatePlayerRequestTimestamp = (roomId, playerId, timeStamp) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        if (roomId && playerId) {
            const gameData = yield (0, getGamingData_1.default)();
            let roomData;
            for (let i = 0; i < gameData.length; i++) {
                const data = gameData[i];
                if (data.roomId === roomId) {
                    roomData = data;
                }
            }
            if (roomData) {
                const usersData = roomData.usersData;
                for (let i = 0; i < usersData.length; i++) {
                    const data = usersData[i];
                    if (data.id === playerId) {
                        data.lastRequestTimeStamp = Date.now();
                    }
                }
                (0, saveGamingData_1.default)(gameData);
                resolve("");
            }
            else {
                reject("Room Does not Exists");
            }
        }
        else {
            reject("RoomId or PlayerId not given");
        }
    }));
};
exports.default = updatePlayerRequestTimestamp;
