"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const getGamingData = () => {
    return new Promise((resolve, reject) => {
        try {
            const filePath = path_1.default.join("./data/gaming-data", "gaming-data.json");
            (0, fs_1.readFile)(filePath, "utf8", (error, data) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                else {
                    const dataAR7 = JSON.parse(data);
                    resolve(dataAR7);
                }
            });
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
exports.default = getGamingData;
