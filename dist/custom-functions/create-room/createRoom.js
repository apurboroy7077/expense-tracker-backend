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
const giveRandomQuestion_1 = __importDefault(require("../give-random-question/giveRandomQuestion"));
const roomIdMaker_1 = __importDefault(require("../roomIdMaker.ts/roomIdMaker"));
const createRoom = (roomName, playerName) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newRoomId = (0, roomIdMaker_1.default)();
            const playerId = (0, roomIdMaker_1.default)();
            const newQuestions = (0, giveRandomQuestion_1.default)(20);
            const newRoomData = {
                roomName: roomName,
                roomId: newRoomId,
                allQuestions: newQuestions,
                currentQuestionData: newQuestions[0],
                usersData: [
                    {
                        name: playerName,
                        id: playerId,
                        score: 0,
                        lastRequestTimeStamp: Date.now(),
                    },
                ],
                creationTime: Date.now(),
            };
            const oldGameData = yield (0, getGamingData_1.default)();
            oldGameData.push(newRoomData);
            yield (0, saveGamingData_1.default)(oldGameData);
            const dataToResolve = {
                roomId: newRoomId,
                playerId: playerId,
            };
            resolve(dataToResolve);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.default = createRoom;
//
