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
Object.defineProperty(exports, "__esModule", { value: true });
exports.giveProjectDataBasedOnIdController = exports.giveProjectDataForClientController = exports.giveProjectDataController = void 0;
const archdune2_model_1 = require("../../models/mongodb/archdune/archdune2.model");
const giveProjectDataController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const receivedData = request.body;
        const projectData = yield archdune2_model_1.project2DataModelMongoDbMongoose.find({});
        response
            .status(200)
            .json({ message: "Fetched Sucessfully", data: projectData });
    }
    catch (error) {
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error.message });
    }
});
exports.giveProjectDataController = giveProjectDataController;
const giveProjectDataForClientController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const receivedData = request.body;
        const projectData = yield archdune2_model_1.project2DataModelMongoDbMongoose.find({
            visibilityStatus: "VISIBLE",
        });
        response
            .status(200)
            .json({ message: "Fetched Sucessfully", data: projectData });
    }
    catch (error) {
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error.message });
    }
});
exports.giveProjectDataForClientController = giveProjectDataForClientController;
const giveProjectDataBasedOnIdController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const receivedData = request.body;
        const { projectId } = receivedData;
        const projectData = yield archdune2_model_1.project2DataModelMongoDbMongoose.findById(projectId);
        response
            .status(200)
            .json({ message: "Fetched Sucessfully", data: projectData });
    }
    catch (error) {
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error.message });
    }
});
exports.giveProjectDataBasedOnIdController = giveProjectDataBasedOnIdController;
