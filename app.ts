import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { authenticationRouter } from "./routes/authentication/authenticationRoutes.route";
import { connectDB } from "./custom-functions/database/connectDB";
import { testingRouter } from "./routes/test/testingRouter.route";
import cors from "cors";
import morgan from "morgan";
import { productsRouter } from "./routes/products/products.route";
import { userActivityRouter } from "./routes/user-activity/userActivity.route";
import { adminRouter } from "./routes/admin/admin.route";
import { projectsRouter } from "./routes/projects/projects.route";
import gameRouter from "./routes/game/game.route";
import { SOCKET_SERVER_PORT } from "./data/quiz-game/environment-variable";
import sendGamingDataToUsers from "./socket/functions/send-gaming-data-to-users/sendGamingDataToUsers";

const app = express();
const server = createServer(app); // Create an HTTP server
const mySocket = new Server(server, {
  cors: {
    origin: "*",
  },
}); // Attach Socket.io to the HTTP server

// USING SOME BASIC PACKAGES STARTS-----------------------------------------------------------------------------------------------------------------------------

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// USING SOME BASIC PACKAGES ENDS-----------------------------------------------------------------------------------------------------------------------------
// USING SOME CUSTOM MIDDLEWARE STARTS------------------------------------------------------------------------------------------------------------------
app.use((req, res, next) => {
  setTimeout(next, 0); // Introduce a delay (adjust time if needed) before passing control to the next middleware
});
// USING SOME CUSTOM MIDDLEWARE ENDS------------------------------------------------------------------------------------------------------------------

// USING ROUTES STARTS------------------------------------------------------------------------------------------------------------------------
app.use(authenticationRouter);
app.use(testingRouter);
app.use(productsRouter);
app.use(userActivityRouter);
app.use(adminRouter);
app.use(projectsRouter);
app.use(gameRouter);
// USING ROUTES ENDS------------------------------------------------------------------------------------------------------------------------

connectDB();
app.get("/", (request, response) => {
  response.send("Server Started");
});
// Socket.io setup-------------------------------------------------------------------------------------------------------------------------------------
mySocket.on("connect", (socket) => {
  socket.emit("message", "I am a message from server");
  socket.on("signalToSendGamingData", (data) => {
    sendGamingDataToUsers(socket, data);
  });
  socket.on("startGame", (data) => {});

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

export default server;
