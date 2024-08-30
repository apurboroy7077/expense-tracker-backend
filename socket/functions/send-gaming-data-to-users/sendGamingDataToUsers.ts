import { Socket } from "socket.io";
import getGamingData from "../get-gaming-data/getGamingData";
import getGamingDataAccordingToRoom from "./getGamingDataAccordingToRoom";
import updatePlayerRequestTimestamp from "../update-player-request-timestamp/updatePlayerRequestTimestamp";

const sendGamingDataToUsers = async (socket: Socket, dataFromClient: any) => {
  try {
    const { roomId, playerId, timeStamp } = dataFromClient;

    const data = await getGamingDataAccordingToRoom(roomId);
    await updatePlayerRequestTimestamp(roomId, playerId, timeStamp);
    socket.emit("clientSideGameDataReceiver", data);
  } catch (error) {
    console.log(error);
  }
};

export default sendGamingDataToUsers;
