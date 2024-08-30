import express from "express";
import createRoomController from "../../controllers/game/createRoom/createRoomController";
import joinRoomController from "../../controllers/game/join-room/joinRoomController";
const gameRouter = express.Router();

gameRouter.post("/create-room", createRoomController);
gameRouter.post("/join-room", joinRoomController);
export default gameRouter;
