import express from "express";
import getGamingData from "../../../socket/functions/get-gaming-data/getGamingData";
import createRoom from "../../../custom-functions/create-room/createRoom";

const createRoomController = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const receivedData = await request.body;
    console.log(receivedData);
    const { roomName, playerName } = receivedData;
    const myData = (await createRoom(roomName, playerName)) as any;
    const { roomId, playerId } = myData;
    const dataForClient = {
      roomName: roomName,
      roomId: roomId,
      playerId: playerId,
      message: "Room Successfully Created!",
    };
    response.status(201).send(dataForClient);
  } catch (error) {
    response.status(500).send("Error Creating Room");
  }
};

export default createRoomController;
