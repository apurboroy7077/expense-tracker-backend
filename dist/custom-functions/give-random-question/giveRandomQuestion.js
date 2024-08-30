"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questionsData_1 = require("../../data/questions/questionsData");
const giveRandomQuestion = (numberOfQuestions) => {
    const choosenQuestions = [];
    for (let i = 0; i < questionsData_1.questionsData.length; i++) {
        const index = Math.floor(Math.random() * questionsData_1.questionsData.length);
        const theChoosenOne = questionsData_1.questionsData[index];
        let isDuplicate = false;
        for (let i = 0; i < choosenQuestions.length; i++) {
            const alreadyChoosenOne = choosenQuestions[i];
            if (alreadyChoosenOne === theChoosenOne) {
                isDuplicate = true;
            }
        }
        if (isDuplicate === false)
            choosenQuestions.push(theChoosenOne);
        if (choosenQuestions.length >= numberOfQuestions) {
            break;
        }
    }
    return choosenQuestions;
};
exports.default = giveRandomQuestion;
//
