"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roomIdMaker = () => {
    const roomId = Math.floor(Math.random() * 10000).toString();
    return roomId;
};
exports.default = roomIdMaker;
