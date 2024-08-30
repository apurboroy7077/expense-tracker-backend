"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const environment_variable_1 = require("./data/quiz-game/environment-variable");
const refineGamingData_1 = __importDefault(require("./socket/functions/refine-gaming-data/refineGamingData"));
app_1.default.listen(environment_variable_1.EXPRESS_SERVER_PORT, () => {
    console.log(`Express is Started at tes http://localhost:${environment_variable_1.EXPRESS_SERVER_PORT}`);
    console.log("Refining Started");
    setInterval(() => {
        (0, refineGamingData_1.default)();
    }, 3000);
});
