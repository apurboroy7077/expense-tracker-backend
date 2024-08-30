"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const ArchduneVariables_1 = require("../../../../data/archdune/variables/ArchduneVariables");
cloudinary_1.v2.config({
    cloud_name: ArchduneVariables_1.CLOUDINARY_CLOUD_NAME,
    api_key: ArchduneVariables_1.CLOUDINARY_API_KEY,
    api_secret: ArchduneVariables_1.CLOUDINARY_API_SECRET,
});
const saveImageAndGiveLink = (file) => {
    return new Promise((resolve, reject) => {
        try {
            const filePath = file.filepath;
            cloudinary_1.v2.uploader
                .upload(filePath, { folder: "/archdune" })
                .then((result) => {
                const imageLink = result.secure_url;
                resolve(imageLink);
            })
                .catch((error) => {
                reject(error);
            });
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.default = saveImageAndGiveLink;
