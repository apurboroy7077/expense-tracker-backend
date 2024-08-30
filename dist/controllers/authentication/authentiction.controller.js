"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermissionToSellStatusController = exports.checkBanStatusController = exports.gettingUserDetailsForClientsController = exports.getSellerDetailsOfProductsForClientSideController = exports.authenticateUserWithTokenController = exports.signInController = exports.signUpController = void 0;
// import {
//   sellersDataModelMongoDbMongoose,
//   userDataModelMongoDbMongoose,
// } from "../../models/mongodb/others/schemas.model";
const hashingPassword_1 = require("../../custom-functions/password-hashing/hashingPassword");
const ar7id_1 = __importDefault(require("../../custom-functions/ar7id/ar7id"));
const schemas2_model_1 = require("../../models/mongodb/others/schemas2.model");
const signUpController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const receivedData = yield request.body;
        const { firstName, lastName, userEmail, phoneCountryCode, phoneNumber, password, accountType, companyName, countryRegion, reasonForSignup, imponexpoAccountURL, } = receivedData;
        // CHECK IF USER ALREADY EXISTS-------------------------------------------------------------------------------------------------------------------------
        // const alreadyExistingUserWithSameEmail =
        //   await userDataModelMongoDbMongoose.find({ userEmail });
        // console.log(alreadyExistingUserWithSameEmail);
        // if (alreadyExistingUserWithSameEmail.length > 0) {
        //   throw new Error("User with Same Email Already Exists.");
        // }
        // // HASHING PASSWORD-----------------------------------------------------------------------------------------------------------------------------------------------
        const hashedPassword = yield (0, hashingPassword_1.hashMyPassword)(password);
        // PROCESSING DATA FOR DATABASE----------------------------------------------------------------------------------------------------------------
        const userFullNameFinal = `${firstName} ${lastName}`;
        const theAr7id = (0, ar7id_1.default)();
        const dataForSavingToDatabase = {
            userFullName: userFullNameFinal,
            userEmail: userEmail,
            countryCodeOfPhoneNumber: phoneCountryCode,
            phoneNumber: phoneNumber,
            password: hashedPassword,
            accountType: accountType,
            companyName: companyName,
            countryRegion: countryRegion,
            reasonForSignup: reasonForSignup,
            imponexpoAccountURL: imponexpoAccountURL,
            ar7id: theAr7id,
        };
        // SAVING TO DATABASE--------------------------------------------------------------------------------------------------------------------------------------
        // await userDataModelMongoDbMongoose.create(dataForSavingToDatabase);
        // SENDING A RESPONSE IF SIGNUP IS SUCCESSFUL-------------------------------------------------------------------------------------------------------------
        response.status(201).send({ message: "Signing Up is Successful." });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.signUpController = signUpController;
const signInController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const receivedData = await request.body;
        // const { userEmail, password } = receivedData;
        // // CHECK IF USER WITH SAME EMAIL EXISTS--------------------------------------------------------------------------------------
        // // const matchedUsers = await userDataModelMongoDbMongoose.find({
        // //   userEmail: userEmail,
        // // });
        // if (matchedUsers.length < 1) {
        //   throw new Error("No User is Registered with this Email!");
        // }
        // // CHECK IF PASSWORD IS CORRECT------------------------------------------------------------------------------------------------
        // const hashedPassword = matchedUsers[0].password;
        // const isPasswordCorrect = await checkPassword(password, hashedPassword);
        // if (isPasswordCorrect === false) {
        //   throw new Error("Password is Incorrect");
        // }
        // // CREATE JSONWEBTOKEN---------------------------------------------------------------------------------------------------------
        // let userDataForClientSide: userDataForClientSideType =
        //   matchedUsers[0].toObject();
        // delete userDataForClientSide.password;
        // delete userDataForClientSide._id;
        // const { ar7id } = matchedUsers[0];
        // const authenticationToken = jwt.sign({ ar7id }, JWT_SECRET_KEY);
        // response.status(200).send({
        //   message: "Signing In Successful.",
        //   authenticationToken: authenticationToken,
        //   userData: userDataForClientSide,
        // });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.signInController = signInController;
const authenticateUserWithTokenController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const receivedData = await request.body;
        // const authenticationToken = receivedData.authenticationToken;
        // const processedData = jwt.verify(
        //   authenticationToken,
        //   JWT_SECRET_KEY
        // ) as JwtPayload;
        // const ar7idOfToken = processedData.ar7id;
        // const userDataSavedOnDatabase = await userDataModelMongoDbMongoose.find({
        //   ar7id: ar7idOfToken,
        // });
        // let userDataForClientSide: userDataForClientSideType;
        // userDataForClientSide = userDataSavedOnDatabase[0].toObject();
        // delete userDataForClientSide.password;
        // delete userDataForClientSide._id;
        // response.status(200).send({
        //   message: "Authentication Successful",
        //   userData: userDataForClientSide,
        // });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.authenticateUserWithTokenController = authenticateUserWithTokenController;
const getSellerDetailsOfProductsForClientSideController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const receivedData = await request.body;
        // const { authenticationToken, ar7idOfTheSeller } = receivedData;
        // await jwt.verify(authenticationToken, JWT_SECRET_KEY);
        // const sellerDetailsSavedOnDatabase =
        //   await userDataModelMongoDbMongoose.find({
        //     ar7id: ar7idOfTheSeller,
        //   });
        // const sellerDetails =
        //   sellerDetailsSavedOnDatabase[0].toObject() as userDataForClientSideType;
        // delete sellerDetails.password;
        // delete sellerDetails._id;
        // response.status(200).send({
        //   message: "Received Seller Details Request Successfully",
        //   sellerDetails: sellerDetails,
        // });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.getSellerDetailsOfProductsForClientSideController = getSellerDetailsOfProductsForClientSideController;
const gettingUserDetailsForClientsController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const receivedData = request.body;
        // const { ar7idOfTheUser } = receivedData;
        // const userDataSavedOnDatabase = await userDataModelMongoDbMongoose.findOne({
        //   ar7id: ar7idOfTheUser,
        // });
        // const processedDataForClient =
        //   userDataSavedOnDatabase?.toObject() as userDataForClientSideType;
        // delete processedDataForClient.password;
        // response.status(200).send({
        //   message: "Received User Details Request Successfully",
        //   userData: processedDataForClient,
        // });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.gettingUserDetailsForClientsController = gettingUserDetailsForClientsController;
const checkBanStatusController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const receivedData = request.body;
        const { ar7idOfTheUser } = receivedData;
        const bannedStatusData = yield schemas2_model_1.bannedSubjectDataModelMongoDbMongoose.findOne({
            ar7idOfTheBannedSubject: ar7idOfTheUser,
        });
        response.status(200).send({
            message: "Received User Details Request Successfully",
            bannedStatusData: bannedStatusData,
        });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.checkBanStatusController = checkBanStatusController;
const checkPermissionToSellStatusController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const receivedData = request.body;
        // const { ar7idOfTheUser } = receivedData;
        // const data = await sellersDataModelMongoDbMongoose.findOne({
        //   ar7idOfSeller: ar7idOfTheUser,
        // });
        // response.status(200).send({
        //   message: "Checked Permission to Sell Successfully",
        //   data: data,
        // });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.checkPermissionToSellStatusController = checkPermissionToSellStatusController;
//
