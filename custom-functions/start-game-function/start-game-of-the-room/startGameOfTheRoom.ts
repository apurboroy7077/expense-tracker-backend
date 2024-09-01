import getGamingData from "../../../socket/functions/get-gaming-data/getGamingData";
import saveGamingData from "../../file-system/saveGamingData";

const startGameOfTheRoom = async (roomId: string) => {
  const dataOfGame = await getGamingData();
  for (let i = 0; i < dataOfGame.length; i++) {
    const dataOfSingleRoom = dataOfGame[i];
    if (dataOfSingleRoom.roomId === roomId) {
      dataOfSingleRoom.gameRunningStatus = "RUNNING";
    }
  }
  await saveGamingData(dataOfGame);
};

export default startGameOfTheRoom;
