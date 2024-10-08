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
const saveGamingData_1 = __importDefault(require("../../../custom-functions/file-system/saveGamingData"));
const getGamingData_1 = __importDefault(require("../get-gaming-data/getGamingData"));
const makeCountDown_1 = __importDefault(require("./make-countdown/makeCountDown"));
const moveToNextQuestion_1 = __importDefault(require("./move-to-next-question/moveToNextQuestion"));
const removeRoomWithoutUsers_1 = __importDefault(require("./remove-room-without-users/removeRoomWithoutUsers"));
const removeUnactivePlayer_1 = __importDefault(require("./remove-unactive-player/removeUnactivePlayer"));
const refineGamingData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gamingData = yield (0, getGamingData_1.default)();
        const dataAfterRemovingUnactivePlayer = (0, removeUnactivePlayer_1.default)(gamingData);
        const dataAfterRemovingRoomWithoutUsers = (0, removeRoomWithoutUsers_1.default)(dataAfterRemovingUnactivePlayer);
        const dataAfterMakingCountdown = (0, makeCountDown_1.default)(dataAfterRemovingRoomWithoutUsers);
        const dataAfterMovingToNextQuestion = (0, moveToNextQuestion_1.default)(dataAfterMakingCountdown);
        yield (0, saveGamingData_1.default)(dataAfterMovingToNextQuestion);
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = refineGamingData;
//
