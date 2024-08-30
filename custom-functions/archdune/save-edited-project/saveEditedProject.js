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
const archdune2_model_1 = require("../../../models/mongodb/archdune/archdune2.model");
const saveEditedProject = (editedData) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { visibilityStatus, projectName, projectImageLink, projectImageCaption, category, studentName, projectCreationYear, studioName, universityName, projectDescription, studioTeachers, typology, height, landArea, buildArea, basement, videoSrc, _id, __v, additionalFields, } = editedData;
            yield archdune2_model_1.project2DataModelMongoDbMongoose.findByIdAndUpdate(_id, {
                visibilityStatus,
                projectName,
                projectImageLink,
                projectImageCaption,
                category,
                studentName,
                projectCreationYear,
                studioName,
                universityName,
                projectDescription,
                studioTeachers,
                typology,
                height,
                landArea,
                buildArea,
                basement,
                videoSrc,
                _id,
                __v,
                additionalFields,
            });
            resolve("Saving SuccessFul");
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    }));
};
exports.default = saveEditedProject;
//
