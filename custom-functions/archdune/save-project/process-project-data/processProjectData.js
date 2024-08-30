"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const turnToObject_1 = __importDefault(require("./turn-into-object/turnToObject"));
const processProjectData = (projectImageLink, additionalFieldsImagesLink, fields) => {
    const fieldKeys = Object.keys(fields);
    const additionalFieldImagesLinkKeys = Object.keys(additionalFieldsImagesLink);
    fields.projectImageLink = projectImageLink;
    for (let i = 0; i < additionalFieldImagesLinkKeys.length; i++) {
        const key = additionalFieldImagesLinkKeys[i];
        const imageLink = additionalFieldsImagesLink[key];
        fields[key] = imageLink;
    }
    const data = (0, turnToObject_1.default)(fields);
    return data;
};
exports.default = processProjectData;
