import server from "./app";
import { SOCKET_SERVER_PORT } from "./data/quiz-game/environment-variable";
import refineGamingData from "./socket/functions/refine-gaming-data/refineGamingData";

server.listen(SOCKET_SERVER_PORT, () => {
  console.log(
    `Socket and Express both server is running on http://localhost:${SOCKET_SERVER_PORT}`
  );
  setInterval(() => {
    refineGamingData();
  }, 3000);
});
