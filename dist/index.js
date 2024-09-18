"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const environment_variable_1 = require("./data/quiz-game/environment-variable");
app_1.default.listen(environment_variable_1.EXPRESS_SERVER_PORT, () => {
    console.log(`Express server is running on http://localhost:${environment_variable_1.EXPRESS_SERVER_PORT}`);
});
