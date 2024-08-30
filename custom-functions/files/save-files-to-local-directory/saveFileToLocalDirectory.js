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
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const giveBufferFromPath_1 = __importDefault(require("../give-buffer-of-file/giveBufferFromPath"));
const saveFileToLocalDirectory = (file_) => __awaiter(void 0, void 0, void 0, function* () {
    const myFile = file_[0];
    const fileName = myFile.originalFilename;
    const oldPath = myFile.filepath;
    const newPath = path_1.default.join(__dirname, fileName);
    const fileBuffer = yield (0, giveBufferFromPath_1.default)(oldPath);
    console.log(fileBuffer);
    (0, fs_1.writeFile)(newPath, fileBuffer, (error) => {
        console.log(error);
    });
});
exports.default = saveFileToLocalDirectory;
