import { createServer } from "http";
import { Server, Socket } from "socket.io";
import getUsersData from "./functions/getUsersData";
import sendDataToUsers from "./functions/send-data-to-users/sendDataToUsers";
import sendGamingDataToUsers from "./functions/send-gaming-data-to-users/sendGamingDataToUsers";
import refineGamingData from "./functions/refine-gaming-data/refineGamingData";

const httpServer = createServer();
const socket = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

socket.on("connect", (mySocket) => {
  mySocket.emit("message", "I am a message from server");
  mySocket.on("getGamingData", (data) => {
    sendGamingDataToUsers(mySocket, data);
  });
  mySocket.on("startGame", (data) => {});
});

const port = 5007;
httpServer.listen(port, () => {
  console.log(`Socket Server is started at http://localhost:${port}`);
  setInterval(() => {
    refineGamingData();
  }, 3000);
});
