"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeRoomWithoutUsers = (data) => {
    const processedData = [];
    for (let i = 0; i < data.length; i++) {
        const singleRoomData = data[i];
        if (singleRoomData.usersData.length > 0) {
            processedData.push(singleRoomData);
        }
    }
    return processedData;
};
exports.default = removeRoomWithoutUsers;
