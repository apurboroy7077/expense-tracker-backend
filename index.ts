import server from "./app";
import { SOCKET_SERVER_PORT } from "./data/quiz-game/environment-variable";

server.listen(SOCKET_SERVER_PORT, () => {
  console.log(`Socket is running on http://localhost:${SOCKET_SERVER_PORT}`);
});
