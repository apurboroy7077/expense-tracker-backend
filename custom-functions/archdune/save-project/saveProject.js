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
const archdune2_model_1 = require("../../../models/mongodb/archdune/archdune2.model");
const processProjectData_1 = __importDefault(require("./process-project-data/processProjectData"));
const saveAndGiveAdditionalFieldsImagesLink_1 = __importDefault(require("./save-and-give-additional-field-images-link/saveAndGiveAdditionalFieldsImagesLink"));
const saveAndGiveProjectImageLink_1 = __importDefault(require("./save-project-image-and-give-link/saveAndGiveProjectImageLink"));
const saveProject = (fields, files) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const projectImageLink = yield (0, saveAndGiveProjectImageLink_1.default)(files);
            const additionalFieldsImagesLink = yield (0, saveAndGiveAdditionalFieldsImagesLink_1.default)(fields, files);
            // const projectImageLink =
            //   "https://res.cloudinary.com/dpmnackpf/image/upload/v1717725130";
            // const additionalFieldsImagesLink = {
            //   additionalField0Image0File:
            //     "https://res.cloudinary.com/dpmnackpf/image/upload/v1717724924/archdune/qs56qhb0xhgoecc0dhlb.png",
            //   additionalField1Image0File:
            //     "https://res.cloudinary.com/dpmnackpf/image/upload/v1717724926/archdune/w4ma1ihrjn8m4ywlw9eu.webp",
            //   additionalField1Image1File:
            //     "https://res.cloudinary.com/dpmnackpf/image/upload/v1717724927/archdune/gr7gm2r1xqsdqistakke.png",
            // };
            const processedData = (0, processProjectData_1.default)(projectImageLink, additionalFieldsImagesLink, fields);
            yield archdune2_model_1.project2DataModelMongoDbMongoose.create(processedData);
            resolve("Successfully Uploaded Project");
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.default = saveProject;
