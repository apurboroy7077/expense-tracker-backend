import getGamingData from "../../socket/functions/get-gaming-data/getGamingData";
import saveGamingData from "../file-system/saveGamingData";
import roomIdMaker from "../roomIdMaker.ts/roomIdMaker";

type addPlayerToRoomType = (roomId: string, playerName: string) => Promise<any>;

const addPlayerToRoom: addPlayerToRoomType = (roomId, playerName) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newPlayerData: any = {
        name: playerName,
        id: roomIdMaker(),
        score: 0,
        lastRequestTimeStamp: Date.now(),
      };
      const dataForClient = {
        playerName: playerName,
        playerId: newPlayerData.id,
      } as any;
      const gameData = await getGamingData();
      let isRoomExists = false;
      for (let i = 0; i < gameData.length; i++) {
        if (gameData[i].roomId === roomId) {
          isRoomExists = true;
          gameData[i].usersData.push(newPlayerData);
          console.log(gameData[i]);
          dataForClient.roomName = gameData[i].roomName;
          dataForClient.roomId = gameData[i].roomId;
        }
      }
      if (isRoomExists === true) {
        await saveGamingData(gameData);
        resolve(dataForClient);
      } else {
        reject("Room Does not Exists");
      }
    } catch (error) {
      reject(error);
    }
  });
};

export default addPlayerToRoom;
