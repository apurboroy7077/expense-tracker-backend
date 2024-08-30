import app from "./app";
import { EXPRESS_SERVER_PORT } from "./data/quiz-game/environment-variable";
import refineGamingData from "./socket/functions/refine-gaming-data/refineGamingData";

app.listen(EXPRESS_SERVER_PORT, () => {
  console.log(
    `Express is Started at tes http://localhost:${EXPRESS_SERVER_PORT}`
  );
  console.log("Refining Started");
  setInterval(() => {
    refineGamingData();
  }, 3000);
});
