import server from "./app";
import { EXPRESS_SERVER_PORT } from "./data/quiz-game/environment-variable";

server.listen(EXPRESS_SERVER_PORT, () => {
  console.log(
    `Express server is running on http://localhost:${EXPRESS_SERVER_PORT}`
  );
});
export const connectMe = 7;
