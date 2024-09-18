import express from "express";
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
import { connectToMySqlDatabase } from "./custom-functions/database/mysql/connectMySql";
import { mySqlRouter } from "./routes/mysql/mysql.route";

const app = express(); // Create an Express app

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
app.use(mySqlRouter);
// USING ROUTES ENDS------------------------------------------------------------------------------------------------------------------------

// connectDB();
connectToMySqlDatabase();
app.get("/", (request, response) => {
  response.send("Server Started");
});

export default app;
