import express, { Express } from "express";

import path from "path";
const app: Express = express();
import { config } from "./src/config/config";
import { log, success, error, warn } from "./src/utils/logging";
import { summonerRoutes } from "./src/routes/summoner/networking";
import { matchRoutes } from "./src/routes/match/networking";

summonerRoutes(app);
matchRoutes(app);
app.use("/static", express.static(path.resolve(__dirname, "src/static")));

const PORT = config.port;

app.listen(PORT, () =>
  success("SERVER", `Server started successfully in port ${PORT}`)
);
