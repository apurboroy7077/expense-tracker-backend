"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const giveDate_1 = __importDefault(require("../../../../utils/giveDate"));
const processImageData_1 = __importDefault(require("./process-images-data/processImageData"));
const turnToObject = (targetData) => {
    const targetDataKeys = Object.keys(targetData);
    const additionalFields = [];
    let separatedData = [];
    for (let i = 0; i < targetDataKeys.length; i++) {
        const serialString = `additionalField${i}`;
        const data = [];
        for (let i = 0; i < targetDataKeys.length; i++) {
            const key = targetDataKeys[i];
            if (key.includes(serialString)) {
                data.push(key);
            }
        }
        separatedData.push(data);
    }
    const separatedData2 = [];
    for (let i = 0; i < separatedData.length; i++) {
        const data = separatedData[i];
        if (data.length > 0) {
            separatedData2.push(data);
        }
    }
    for (let i = 0; i < separatedData2.length; i++) {
        const myObjectData = {};
        const data = separatedData2[i];
        for (let i = 0; i < data.length; i++) {
            const myData = data[i];
            if (myData.includes("Name")) {
                myObjectData.fieldName = targetData[myData][0];
            }
            else if (myData.includes("Description")) {
                myObjectData.fieldDescription = targetData[myData][0];
            }
        }
        const fieldImages = (0, processImageData_1.default)(data, targetData);
        myObjectData.fieldImages = fieldImages;
        additionalFields.push(myObjectData);
    }
    console.log(targetData);
    const myFinalData = {
        basement: targetData.basement[0],
        buildArea: targetData.buildArea[0],
        category: targetData.category[0],
        height: targetData.height[0],
        landArea: targetData.landArea[0],
        projectCreationYear: targetData.projectCreationYear[0],
        projectDescription: targetData.projectDescription[0],
        projectImageLink: targetData.projectImageLink,
        projectImageCaption: targetData.projectImageCaption[0],
        projectName: targetData.projectName[0],
        studentName: targetData.studentName[0],
        studioName: targetData.studioName[0],
        studioTeachers: targetData.studioTeachers[0],
        typology: targetData.typology[0],
        universityName: targetData.universityName[0],
        videoSrc: targetData.videoSrc[0],
        visibilityStatus: targetData.visibilityStatus[0],
        additionalFields: additionalFields,
        location: targetData.location[0],
        uploadDate: (0, giveDate_1.default)(),
        totalViews: 0,
    };
    return myFinalData;
};
exports.default = turnToObject;
