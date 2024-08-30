"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const giveBufferFromPath = (pathOfFile) => {
    return new Promise((resolve, reject) => {
        (0, fs_1.readFile)(pathOfFile, (error, buffer) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(buffer);
            }
        });
    });
};
exports.default = giveBufferFromPath;
