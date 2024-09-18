import express from "express";
import { signUpController } from "../../controllers/authentication/sign-up/signUp.controller";
import { verifyAccountController } from "../../controllers/authentication/verify-account/verifyAccount.controller";

const authenticationRouter = express.Router();
authenticationRouter.post("/authentication/sign-up", signUpController);
authenticationRouter.post(
  "/authentication/verify-account",
  verifyAccountController
);
export { authenticationRouter };
