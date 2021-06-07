import express, { Router, Express, Request, Response } from "express";
import { log, success, warn, error } from "../../utils/logging";
import { getMatch } from "./controller";
import { cacheResponse } from "../../utils/cacheControl";

export const matchRoutes = (app: Express) => {
  const router: Router = express.Router();

  app.use("/match", router);

  router.get("/:matchId", async (req: Request, res: Response, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    const { matchId } = req.params;

    getMatch(matchId)
      .then((matchData) => {
        log("GET MATCH", `Getted ${matchId} info`);
        cacheResponse(res, 31104000);
        res.status(200).send({
          body: matchData,
          method: "GET",
        });
      })
      .catch((e) => {
        console.log(e);
        error("GET SUMMONER", `${e}`);
        res.status(500).send({
          body: {},
          method: "GET",
          error: true,
          message: "Server Internal Error",
        });
      });
  });
};
