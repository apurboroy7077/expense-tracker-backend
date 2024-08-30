"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wait = (miliseconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("");
        }, miliseconds);
    });
};
exports.default = wait;
