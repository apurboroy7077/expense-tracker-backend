import express from "express";
import jwt from "jsonwebtoken";
import { ARCHDUNE_ADMIN_JWT_KEY } from "../../data/archdune/variables/ArchduneVariables";
const ArchDuneCheckAdmin = (request: express.Request) => {
  const { adminToken } = request.body;
  jwt.verify(adminToken, ARCHDUNE_ADMIN_JWT_KEY);
};
export const ArchDuneCheckAdminFromForm = (fields: any) => {
  const adminToken = fields.adminToken[0];
  const data = jwt.verify(adminToken, ARCHDUNE_ADMIN_JWT_KEY);
};

export default ArchDuneCheckAdmin;
