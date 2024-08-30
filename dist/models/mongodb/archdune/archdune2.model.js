"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.project2DataModelMongoDbMongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const archDuneCollectionNames_model_1 = require("./archDuneCollectionNames.model");
const fieldImagesSchema = new mongoose_1.default.Schema({
    caption: {
        type: String,
        required: true,
    },
    imageSrc: {
        type: String,
        required: true,
    },
});
const additionalFieldSchema = new mongoose_1.default.Schema({
    fieldName: { type: String, required: true },
    fieldDescription: { type: String, required: true },
    fieldImages: [fieldImagesSchema],
});
const projectSchema = new mongoose_1.default.Schema({
    basement: { type: String, default: "" },
    buildArea: { type: String, default: "" },
    category: { type: String, default: "" },
    height: { type: String, default: "" },
    landArea: { type: String, default: "" },
    projectCreationYear: { type: String, default: "" },
    projectDescription: { type: String, default: "" },
    projectImageLink: { type: String, required: true },
    projectImageCaption: { type: String, default: "" },
    projectName: { type: String, default: "" },
    studentName: { type: String, default: "" },
    studioName: { type: String, default: "" },
    studioTeachers: { type: String, default: "" },
    typology: { type: String, default: "" },
    universityName: { type: String, default: "" },
    videoSrc: { type: String, default: "" },
    visibilityStatus: { type: String, default: "null" },
    uploadDate: { type: String, required: true },
    totalViews: { type: Number, required: true },
    location: { type: String, required: true },
    additionalFields: [additionalFieldSchema],
});
exports.project2DataModelMongoDbMongoose = mongoose_1.default.model(archDuneCollectionNames_model_1.COLLECTION_NAME_ARCHDUNE_PROJECT_DATA, projectSchema);
