"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const giveNumberFromString = (myString) => {
    let matches = myString.match(/\d+/g);
    if (matches) {
        return matches.map(Number);
    }
    else {
        return [];
    }
};
exports.default = giveNumberFromString;
