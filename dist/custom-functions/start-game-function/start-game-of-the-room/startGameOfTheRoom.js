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
const getGamingData_1 = __importDefault(require("../../../socket/functions/get-gaming-data/getGamingData"));
const saveGamingData_1 = __importDefault(require("../../file-system/saveGamingData"));
const startGameOfTheRoom = (roomId) => __awaiter(void 0, void 0, void 0, function* () {
    const dataOfGame = yield (0, getGamingData_1.default)();
    for (let i = 0; i < dataOfGame.length; i++) {
        const dataOfSingleRoom = dataOfGame[i];
        if (dataOfSingleRoom.roomId === roomId) {
            dataOfSingleRoom.gameRunningStatus = "RUNNING";
        }
    }
    yield (0, saveGamingData_1.default)(dataOfGame);
});
exports.default = startGameOfTheRoom;
