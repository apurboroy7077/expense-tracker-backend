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
const removeRoomWithoutUsers_1 = __importDefault(require("./remove-room-without-users/removeRoomWithoutUsers"));
const removeUnactivePlayer_1 = __importDefault(require("./remove-unactive-player/removeUnactivePlayer"));
const refineGamingData = () => __awaiter(void 0, void 0, void 0, function* () {
    const gamingData = yield (0, getGamingData_1.default)();
    const dataAfterRemovingUnactivePlayer = (0, removeUnactivePlayer_1.default)(gamingData);
    const dataAfterRemovingRoomWithoutUsers = (0, removeRoomWithoutUsers_1.default)(dataAfterRemovingUnactivePlayer);
    yield (0, saveGamingData_1.default)(dataAfterRemovingRoomWithoutUsers);
});
exports.default = refineGamingData;
//
