"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationRouter = void 0;
const express_1 = __importDefault(require("express"));
const signUp_controller_1 = require("../../controllers/authentication/sign-up/signUp.controller");
const verifyAccount_controller_1 = require("../../controllers/authentication/verify-account/verifyAccount.controller");
const authenticationRouter = express_1.default.Router();
exports.authenticationRouter = authenticationRouter;
authenticationRouter.post("/authentication/sign-up", signUp_controller_1.signUpController);
authenticationRouter.post("/authentication/verify-account", verifyAccount_controller_1.verifyAccountController);
