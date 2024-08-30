"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const saveGamingData = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const filePath = path_1.default.join("./data/gaming-data", "gaming-data.json");
            const processedData = JSON.stringify(data);
            (0, fs_1.writeFile)(filePath, processedData, "utf8", (error) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                else {
                    resolve("");
                }
            });
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
exports.default = saveGamingData;
