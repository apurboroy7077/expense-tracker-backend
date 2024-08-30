"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.updateProjectDataController = exports.uploadNewProjectController = exports.authorizeAdminTokenController = exports.giveAdminTokenController = exports.removeUserPermissionToSellController = exports.unBanSubjectController = exports.gettingUserDetailsForAdminController = exports.gettingUsersDataController = exports.gettingReportsMadeByUserController = exports.seeingUserDetailsByAdminController = exports.approveProductController = exports.unBanUserController = exports.deleteProductByAdminController = exports.banSubjectController = exports.giveUserPermissionToSellController = exports.makingSomeoneAdminController = void 0;
const EnvironmentVariables_1 = require("../../data/others/EnvironmentVariables");
const formidable_1 = __importDefault(require("formidable"));
// import {
//   adminDataModelMongoDbMongoose,
//   bannedUserDataModelMongoDbMongoose,
//   productsDataModelMongoDbMongoose,
//   productsToBeApprovedDataModelMongoDbMongoose,
//   reportsDataModelMongoDbMongoose,
//   sellersDataModelMongoDbMongoose,
//   userDataModelMongoDbMongoose,
// } from "../../models/mongodb/others/schemas.model";
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const adminMiddlewares_1 = require("../../custom-functions/middlewares/admin/adminMiddlewares");
const schemas2_model_1 = require("../../models/mongodb/others/schemas2.model");
const ArchduneVariables_1 = require("../../data/archdune/variables/ArchduneVariables");
const mongoose_1 = __importDefault(require("mongoose"));
const ArchDuneCheckAdmin_1 = __importStar(require("../../custom-functions/archdune/ArchDuneCheckAdmin"));
const saveProject_1 = __importDefault(require("../../custom-functions/archdune/save-project/saveProject"));
const wait_1 = __importDefault(require("../../custom-functions/utils/wait"));
const saveEditedProject_1 = __importDefault(require("../../custom-functions/archdune/save-edited-project/saveEditedProject"));
const ObjectId = mongoose_1.default.Types.ObjectId;
const makingSomeoneAdminController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const receivedData = request.body;
        const superuserKey = receivedData.IMPONEXPO_SUPERUSER_KEY;
        if (superuserKey !== EnvironmentVariables_1.IMPONEXPO_SUPERUSER_KEY) {
            throw new Error("Invalid Superuser Key!");
        }
        const ar7idOfTheUserWhoWillBeAdmin = receivedData.ar7idOfTheUserWhoWillBeAdmin;
        // await adminDataModelMongoDbMongoose.create({
        //   ar7idOfTheAdmin: ar7idOfTheUserWhoWillBeAdmin,
        // });
        console.log(`Successfully Made ${ar7idOfTheUserWhoWillBeAdmin} a Admin.`);
        response.status(200).send({
            message: "Admin Request Received Successfully",
        });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.makingSomeoneAdminController = makingSomeoneAdminController;
const giveUserPermissionToSellController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, adminMiddlewares_1.checkIsAdmin)(request);
        const receivedData = request.body;
        const { ar7idOfTheUserToGivePermissionToSell } = receivedData;
        const timeStamp = Date.now();
        // await sellersDataModelMongoDbMongoose.create({
        //   ar7idOfSeller: ar7idOfTheUserToGivePermissionToSell,
        //   timeStamp: timeStamp,
        // });
        response.status(200).send({
            message: "Added The User to sellers list Successfully",
        });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.giveUserPermissionToSellController = giveUserPermissionToSellController;
const removeUserPermissionToSellController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, adminMiddlewares_1.checkIsAdmin)(request);
        const receivedData = request.body;
        const { ar7idOfTheUserToRemoveSellingPermission } = receivedData;
        // await sellersDataModelMongoDbMongoose.deleteOne({
        //   ar7idOfSeller: ar7idOfTheUserToRemoveSellingPermission,
        // });
        response.status(200).send({
            message: "Removed User's Permission of Selling Successfully.",
        });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.removeUserPermissionToSellController = removeUserPermissionToSellController;
const banSubjectController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // CHECK IF ADMIN---------------------------------------------------------------------------------------------------
        yield (0, adminMiddlewares_1.checkIsAdmin)(request);
        // PUT THE USER IN BANLIST DATABASE----------------------------------------------------------------------------------
        const receivedData = request.body;
        const { ar7idOfTheUserWhoWillBeBanned } = receivedData;
        yield schemas2_model_1.bannedSubjectDataModelMongoDbMongoose.create({
            ar7idOfTheBannedSubject: ar7idOfTheUserWhoWillBeBanned,
            timeStamp: Date.now(),
        });
        response.status(200).send({
            message: "Banned User Successful.",
        });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.banSubjectController = banSubjectController;
const unBanUserController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // CHECK ADMIN OR NOT--------------------------------------------------------------------------------------------------------
        yield (0, adminMiddlewares_1.checkIsAdmin)(request);
        //  Remove USER FROM BANLIST----------------------------------------------------------------------------------------------------------
        const receivedData = request.body;
        const { ar7idOfTheUserWhoWillBeUnBanned } = receivedData;
        yield schemas2_model_1.bannedSubjectDataModelMongoDbMongoose.deleteOne({
            ar7idOfTheBannedSubject: ar7idOfTheUserWhoWillBeUnBanned,
        });
        response.status(200).send({
            message: "Banned User Successful.",
        });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.unBanUserController = unBanUserController;
const unBanSubjectController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // CHECK ADMIN OR NOT--------------------------------------------------------------------------------------------------------
        yield (0, adminMiddlewares_1.checkIsAdmin)(request);
        //  Remove USER FROM BANLIST----------------------------------------------------------------------------------------------------------
        const receivedData = request.body;
        const { ar7idOfTheUserWhoWillBeUnBanned } = receivedData;
        yield schemas2_model_1.bannedSubjectDataModelMongoDbMongoose.deleteOne({
            ar7idOfTheBannedSubject: ar7idOfTheUserWhoWillBeUnBanned,
        });
        response.status(200).send({
            message: "Unbanned Successfully.",
        });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.unBanSubjectController = unBanSubjectController;
const deleteProductByAdminController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // CHECK IF IS ADMIN---------------------------------------------------------------------------------------------------------
        yield (0, adminMiddlewares_1.checkIsAdmin)(request);
        // DELETE THE PRODUCT FROM DATABASE------------------------------------------------------------------------------
        const receivedData = request.body;
        const { ar7idOfTheProductWhichWillBeDeleted } = receivedData;
        // await productsDataModelMongoDbMongoose.deleteOne({
        //   ar7id: ar7idOfTheProductWhichWillBeDeleted,
        // });
        console.log(`${ar7idOfTheProductWhichWillBeDeleted} is deleted successfully`);
        response.status(200).send({
            message: "Deleted Product Successfully.",
        });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.deleteProductByAdminController = deleteProductByAdminController;
const approveProductController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // CHECK IF IS ADMIN---------------------------------------------------------------------------------------------------------
        yield (0, adminMiddlewares_1.checkIsAdmin)(request);
        // FIND THE PRODUCT FROM PRODUCTS TO BE APPROVED DATABASE------------------------------------------------------------------------------
        const receivedData = request.body;
        const { ar7idOfTheProductWhichWillBeApproved } = receivedData;
        // const dataOfTheProductsToBeApproved =
        //   await productsToBeApprovedDataModelMongoDbMongoose.find({
        //     ar7id: ar7idOfTheProductWhichWillBeApproved,
        //   });
        // then you insert it to the main database
        response.status(200).send({
            message: "Approved The Product Successfully",
        });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.approveProductController = approveProductController;
const seeingUserDetailsByAdminController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // CHECK IF IS ADMIN---------------------------------------------------------------------------------------------------------
        yield (0, adminMiddlewares_1.checkIsAdmin)(request);
        // FIND THE PRODUCT FROM PRODUCTS TO BE APPROVED DATABASE------------------------------------------------------------------------------
        const receivedData = request.body;
        const { ar7idOfTheUserOfWhichDetailsWillBeShown } = receivedData;
        console.log(ar7idOfTheUserOfWhichDetailsWillBeShown);
        // const userData = await userDataModelMongoDbMongoose.findOne({
        //   ar7id: ar7idOfTheUserOfWhichDetailsWillBeShown,
        // });
        response.status(200).send({
            message: "Fetched User's Data Successfully",
        });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.seeingUserDetailsByAdminController = seeingUserDetailsByAdminController;
const gettingReportsMadeByUserController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // CHECK IF IS ADMIN---------------------------------------------------------------------------------------------------------
        yield (0, adminMiddlewares_1.checkIsAdmin)(request);
        // GET REPORTS FROM DATABASE------------------------------------------------------------------------------
        const receivedData = request.body;
        const { numberOfReportsToGet } = receivedData;
        // const productsFetchedFromDatabase =
        //   await reportsDataModelMongoDbMongoose.aggregate([
        //     { $sample: { size: numberOfReportsToGet } },
        //   ]);
        response.status(200).send({
            message: "Fetched User's Reports Successfully",
        });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.gettingReportsMadeByUserController = gettingReportsMadeByUserController;
const gettingUsersDataController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // CHECK IF IS ADMIN---------------------------------------------------------------------------------------------------------
        yield (0, adminMiddlewares_1.checkIsAdmin)(request);
        // GET REPORTS FROM DATABASE------------------------------------------------------------------------------
        const receivedData = request.body;
        const { pageNo } = receivedData;
        const skippingNumber = (pageNo - 1) * 10;
        const limitNumber = 10;
        // const usersData = await userDataModelMongoDbMongoose
        //   .find({})
        //   .skip(skippingNumber)
        //   .limit(limitNumber);
        response.status(200).send({
            message: "Fetched User's Data Successfully.",
        });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.gettingUsersDataController = gettingUsersDataController;
const gettingUserDetailsForAdminController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // CHECK IF IS ADMIN---------------------------------------------------------------------------------------------------------
        yield (0, adminMiddlewares_1.checkIsAdmin)(request);
        const receivedData = request.body;
        const { ar7idOfTheUser } = receivedData;
        // const userDetails = await userDataModelMongoDbMongoose.findOne({
        //   ar7id: ar7idOfTheUser,
        // });
        response.status(200).send({
            message: "Fetched User's Data Successfully.",
            // userDetails: userDetails,
        });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).send(error.message);
    }
});
exports.gettingUserDetailsForAdminController = gettingUserDetailsForAdminController;
const giveAdminTokenController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const receivedData = request.body;
        const { adminPassword } = receivedData;
        if (adminPassword !== ArchduneVariables_1.ARCHDUNE_SUPER_USER_PASSWORD) {
            throw new Error("Wrong Password!");
        }
        const adminToken = jsonwebtoken_1.default.sign({ adminPower: true }, ArchduneVariables_1.ARCHDUNE_ADMIN_JWT_KEY);
        response
            .status(200)
            .json({ message: "Authorized Successfully", adminToken: adminToken });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error.message });
    }
});
exports.giveAdminTokenController = giveAdminTokenController;
const authorizeAdminTokenController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const receivedData = request.body;
        const { adminToken } = receivedData;
        const data = yield jsonwebtoken_1.default.verify(adminToken, ArchduneVariables_1.ARCHDUNE_ADMIN_JWT_KEY);
        response.status(200).json({ message: "Authorized Successfully" });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error.message });
    }
});
exports.authorizeAdminTokenController = authorizeAdminTokenController;
const uploadNewProjectController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const form = (0, formidable_1.default)({});
        let fields;
        let files;
        try {
            [fields, files] = yield form.parse(request);
        }
        catch (error) {
            console.log(error);
        }
        (0, ArchDuneCheckAdmin_1.ArchDuneCheckAdminFromForm)(fields);
        yield (0, saveProject_1.default)(fields, files);
        yield (0, wait_1.default)(2000);
        response.status(200).json({ message: "Uploaded Project Successfully" });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error.message });
    }
});
exports.uploadNewProjectController = uploadNewProjectController;
const updateProjectDataController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, ArchDuneCheckAdmin_1.default)(request);
        const receivedData = request.body;
        const { projectData } = receivedData;
        yield (0, saveEditedProject_1.default)(projectData);
        // await projectsDataModelMongoDbMongoose.updateOne(
        //   { _id: projectId },
        //   { data: projectDataToSave }
        // );
        response.status(200).json({ message: "Authorized Successfully" });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error.message });
    }
});
exports.updateProjectDataController = updateProjectDataController;
//
