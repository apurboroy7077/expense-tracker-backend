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
const saveImageAndGiveLink_1 = __importDefault(require("../save-image-and-give-link/saveImageAndGiveLink"));
const saveAndGiveProjectImageLink = (files) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const fileKeys = Object.keys(files);
            for (let i = 0; i < fileKeys.length; i++) {
                const key = fileKeys[i];
                if (key === "projectImage") {
                    const projectImageFile = files[key][0];
                    const imageLink = yield (0, saveImageAndGiveLink_1.default)(projectImageFile);
                    resolve(imageLink);
                }
            }
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.default = saveAndGiveProjectImageLink;
