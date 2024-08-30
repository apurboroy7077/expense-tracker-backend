"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchDuneCheckAdminFromForm = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ArchduneVariables_1 = require("../../data/archdune/variables/ArchduneVariables");
const ArchDuneCheckAdmin = (request) => {
    const { adminToken } = request.body;
    jsonwebtoken_1.default.verify(adminToken, ArchduneVariables_1.ARCHDUNE_ADMIN_JWT_KEY);
};
const ArchDuneCheckAdminFromForm = (fields) => {
    const adminToken = fields.adminToken[0];
    const data = jsonwebtoken_1.default.verify(adminToken, ArchduneVariables_1.ARCHDUNE_ADMIN_JWT_KEY);
};
exports.ArchDuneCheckAdminFromForm = ArchDuneCheckAdminFromForm;
exports.default = ArchDuneCheckAdmin;
