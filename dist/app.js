"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authenticationRoutes_route_1 = require("./routes/authentication/authenticationRoutes.route");
const testingRouter_route_1 = require("./routes/test/testingRouter.route");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const products_route_1 = require("./routes/products/products.route");
const userActivity_route_1 = require("./routes/user-activity/userActivity.route");
const admin_route_1 = require("./routes/admin/admin.route");
const projects_route_1 = require("./routes/projects/projects.route");
const game_route_1 = __importDefault(require("./routes/game/game.route"));
const connectMySql_1 = require("./custom-functions/database/mysql/connectMySql");
const mysql_route_1 = require("./routes/mysql/mysql.route");
const app = (0, express_1.default)(); // Create an Express app
// USING SOME BASIC PACKAGES STARTS-----------------------------------------------------------------------------------------------------------------------------
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
// USING SOME BASIC PACKAGES ENDS-----------------------------------------------------------------------------------------------------------------------------
// USING SOME CUSTOM MIDDLEWARE STARTS------------------------------------------------------------------------------------------------------------------
app.use((req, res, next) => {
    setTimeout(next, 0); // Introduce a delay (adjust time if needed) before passing control to the next middleware
});
// USING SOME CUSTOM MIDDLEWARE ENDS------------------------------------------------------------------------------------------------------------------
// USING ROUTES STARTS------------------------------------------------------------------------------------------------------------------------
app.use(authenticationRoutes_route_1.authenticationRouter);
app.use(testingRouter_route_1.testingRouter);
app.use(products_route_1.productsRouter);
app.use(userActivity_route_1.userActivityRouter);
app.use(admin_route_1.adminRouter);
app.use(projects_route_1.projectsRouter);
app.use(game_route_1.default);
app.use(mysql_route_1.mySqlRouter);
// USING ROUTES ENDS------------------------------------------------------------------------------------------------------------------------
// connectDB();
(0, connectMySql_1.connectToMySqlDatabase)();
app.get("/", (request, response) => {
    response.send("Server Started");
});
exports.default = app;
