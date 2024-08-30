import saveGamingData from "../../../custom-functions/file-system/saveGamingData";
import getGamingData from "../get-gaming-data/getGamingData";
import removeRoomWithoutUsers from "./remove-room-without-users/removeRoomWithoutUsers";
import removeUnactivePlayer from "./remove-unactive-player/removeUnactivePlayer";

const refineGamingData = async () => {
  const gamingData = await getGamingData();
  const dataAfterRemovingUnactivePlayer = removeUnactivePlayer(gamingData);
  const dataAfterRemovingRoomWithoutUsers = removeRoomWithoutUsers(
    dataAfterRemovingUnactivePlayer
  );
  await saveGamingData(dataAfterRemovingRoomWithoutUsers);
};

export default refineGamingData;
//
