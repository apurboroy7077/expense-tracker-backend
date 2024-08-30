"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectsRouter = void 0;
const express_1 = __importDefault(require("express"));
const archduneApiAddresses_1 = require("../../data/archdune/api-addresses/archduneApiAddresses");
const projects_controller_1 = require("../../controllers/projects/projects.controller");
const projectsRouter = express_1.default.Router();
exports.projectsRouter = projectsRouter;
projectsRouter.post(archduneApiAddresses_1.ARCHDUNE_GIVE_PROJECTS_DATA_API, projects_controller_1.giveProjectDataController);
projectsRouter.post(archduneApiAddresses_1.ARCHDUNE_GIVE_PROJECT_DATA_BASED_ON_NAME_API, projects_controller_1.giveProjectDataBasedOnIdController);
projectsRouter.post(archduneApiAddresses_1.ARCHDUNE_GIVE_PROJECT_DATA_FOR_CLIENT_API, projects_controller_1.giveProjectDataForClientController);
projectsRouter.post(archduneApiAddresses_1.ARCHDUNE_GIVE_PROJECT_DATA_BASED_ON_ID_API, projects_controller_1.giveProjectDataBasedOnIdController);
