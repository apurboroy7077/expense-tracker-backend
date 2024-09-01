import stopTheGameOfTheRoom from "./stop-it/stopTheGameNow";

const stopGame = (
  dataFromClient: dataFromClientForStoppingAndStartingGameType
) => {
  const { roomId } = dataFromClient;
  stopTheGameOfTheRoom(roomId);
};

export default stopGame;
