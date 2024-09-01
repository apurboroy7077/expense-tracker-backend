"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const authenticationRoutes_route_1 = require("./routes/authentication/authenticationRoutes.route");
const testingRouter_route_1 = require("./routes/test/testingRouter.route");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const products_route_1 = require("./routes/products/products.route");
const userActivity_route_1 = require("./routes/user-activity/userActivity.route");
const admin_route_1 = require("./routes/admin/admin.route");
const projects_route_1 = require("./routes/projects/projects.route");
const game_route_1 = __importDefault(require("./routes/game/game.route"));
const sendGamingDataToUsers_1 = __importDefault(require("./socket/functions/send-gaming-data-to-users/sendGamingDataToUsers"));
const startGame_1 = __importDefault(require("./custom-functions/start-game-function/startGame"));
const stopGame_1 = __importDefault(require("./custom-functions/stop-game-function/stopGame"));
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app); // Create an HTTP server
const mySocket = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
    },
}); // Attach Socket.io to the HTTP server
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
// USING ROUTES ENDS------------------------------------------------------------------------------------------------------------------------
// connectDB();
app.get("/", (request, response) => {
    response.send("Server Started");
});
// Socket.io setup-------------------------------------------------------------------------------------------------------------------------------------
mySocket.on("connect", (socket) => {
    console.log("User Connected");
    socket.emit("message", "I am a message from server");
    socket.on("signalToSendGamingData", (data) => {
        (0, sendGamingDataToUsers_1.default)(socket, data);
    });
    socket.on("startGame", (data) => {
        (0, startGame_1.default)(data);
    });
    socket.on("stopGame", (data) => {
        (0, stopGame_1.default)(data);
    });
    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});
exports.default = server;
//
