import express, { Router, Express, Request, Response } from "express";
import { log, success, warn, error } from "../../utils/logging";
import { getUser, getUserByPuuid } from "./controller";
import { cacheResponse } from "../../utils/cacheControl";

export const summonerRoutes = (app: Express) => {
  const router: Router = express.Router();

  app.use("/summoner", router);

  router.get("/:summonerName", async (req: Request, res: Response, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    const { summonerName } = req.params;

    getUser(summonerName)
      .then((userData) => {
        log("GET SUMMONER", `Getted ${summonerName} info`);
        res.status(200).send({
          body: userData,
          method: "GET",
        });
      })
      .catch((e) => {
        error("GET SUMMONER", `${e}`);
        res.status(500).send({
          body: {},
          method: "GET",
          error: true,
          message: "Server Internal Error",
        });
      });
  });

  router.get("/puuid/:puuid", async (req: Request, res: Response, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    const { puuid } = req.params;

    getUserByPuuid(puuid)
      .then((userData: any) => {
        log("GET SUMMONER", `Getted ${userData.summonerName} info`);
        cacheResponse(res, 31104000);
        res.status(200).send({
          body: userData,
          method: "GET",
        });
      })
      .catch((e) => {
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
