import express from "express";
import { createTableControllerOfMySql } from "../../controllers/mySql/create-table/createTable.controller";
const mySqlRouter = express.Router();
mySqlRouter.post("/mysql/create-table", createTableControllerOfMySql);
export { mySqlRouter };
