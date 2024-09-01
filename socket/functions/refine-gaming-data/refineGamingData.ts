import saveGamingData from "../../../custom-functions/file-system/saveGamingData";
import getGamingData from "../get-gaming-data/getGamingData";
import removeRoomWithoutUsers from "./remove-room-without-users/removeRoomWithoutUsers";
import removeUnactivePlayer from "./remove-unactive-player/removeUnactivePlayer";

const refineGamingData = async () => {
  try {
    const gamingData = await getGamingData();
    const dataAfterRemovingUnactivePlayer = removeUnactivePlayer(gamingData);
    const dataAfterRemovingRoomWithoutUsers = removeRoomWithoutUsers(
      dataAfterRemovingUnactivePlayer
    );
    await saveGamingData(dataAfterRemovingRoomWithoutUsers);
  } catch (error) {
    console.log(error);
  }
};

export default refineGamingData;
//
