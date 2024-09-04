import saveGamingData from "../../../custom-functions/file-system/saveGamingData";
import getGamingData from "../get-gaming-data/getGamingData";
import makeCountDown from "./make-countdown/makeCountDown";
import moveToNextQuestion from "./move-to-next-question/moveToNextQuestion";
import removeRoomWithoutUsers from "./remove-room-without-users/removeRoomWithoutUsers";
import removeUnactivePlayer from "./remove-unactive-player/removeUnactivePlayer";

const refineGamingData = async () => {
  try {
    const gamingData = await getGamingData();
    const dataAfterRemovingUnactivePlayer = removeUnactivePlayer(gamingData);
    const dataAfterRemovingRoomWithoutUsers = removeRoomWithoutUsers(
      dataAfterRemovingUnactivePlayer
    );
    const dataAfterMakingCountdown = makeCountDown(
      dataAfterRemovingRoomWithoutUsers
    );
    const dataAfterMovingToNextQuestion = moveToNextQuestion(
      dataAfterMakingCountdown
    );
    await saveGamingData(dataAfterMovingToNextQuestion);
  } catch (error) {
    console.log(error);
  }
};

export default refineGamingData;
//
