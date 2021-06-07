import { config } from "../../config/config";
import { constants } from "../../utils/API_Constants";
import fetch from "node-fetch";

const getRanks: (base: string) => Record<string, string> = (base) => {
  const ranks: Record<string, string> = {
    IRON: `${base}iron.png`,
    BRONZE: `${base}bronze.png`,
    SILVER: `${base}silver.png`,
    GOLD: `${base}gold.png`,
    PLATINUM: `${base}platinum.png`,
    DIAMOND: `${base}diamond.png`,
    MASTER: `${base}master.png`,
    GRANDMASTER: `${base}grandmaster.png`,
    CHALLENGER: `${base}challenger.png`,
  };
  return ranks;
};

const getRiotAPIHeader = () => {
  return [["X-Riot-Token", `${config.riotApiKey}`]];
};

const getUserBorder = (rank: string) => {
  const base = constants.borders.image;
  const ranks = getRanks(base);

  return ranks[rank] || null;
};

const getUserEmblem = (rank: any) => {
  const base = constants.emblems.image;
  const ranks = getRanks(base);

  return (
    ranks[rank] ||
    `https://${constants.datadragon.base}${constants.datadragon.icons.image}29.png`
  );
};

export const fetchUser = async (summonerName: string) => {
  let userInfo = {};

  const basicInfoURL = `https://${constants.platform_routings.LA2}${constants.apis.summoner.summonerName}${summonerName}`;
  const basicInfoRequest = await fetch(basicInfoURL, {
    headers: getRiotAPIHeader(),
  });

  const basicInfoData: Record<string, any> = await basicInfoRequest.json();

  const rankedInfoURL = `https://${constants.platform_routings.LA2}${constants.apis.league_entries.bySummonerId}${basicInfoData.id}`;
  const rankedInfoRequest = await fetch(rankedInfoURL, {
    headers: getRiotAPIHeader(),
  });
  const rankedInfoData: Record<string, any> = await rankedInfoRequest.json();

  const matchsInfoURL = `https://${
    constants.regional_routings.AMERICAS
  }${constants.apis.matches.listByPuuid.replace(
    "%puuid%",
    basicInfoData.puuid
  )}?start=0&count=10`;

  const matchsInfoRequest = await fetch(matchsInfoURL, {
    headers: getRiotAPIHeader(),
  });

  const matchsInfoData = await matchsInfoRequest.json();

  const profileIconURL = `${constants.datadragon.base}${constants.datadragon.icons.image}${basicInfoData.profileIconId}.png`;
  const profileBorderURL = getUserBorder(rankedInfoData[0].tier);
  const profileRankedInfo = rankedInfoData.map(
    (queueData: Record<string, string | number | boolean>) => {
      const {
        leagueId,
        queueType,
        tier,
        rank,
        leaguePoints,
        wins,
        losses,
        hotStreak,
      } = queueData;

      const emblemURL = getUserEmblem(tier);

      return {
        leagueId,
        queueType,
        tier,
        rank,
        leaguePoints,
        wins,
        losses,
        hotStreak,
        rankEmblemURL: emblemURL,
        winrate: `${((<any>wins / (<any>wins + losses)) * 100).toFixed(0)}%`,
      };
    }
  );

  userInfo = {
    ...userInfo,
    id: basicInfoData.id,
    summonerName: basicInfoData.name,
    summonerLevel: basicInfoData.summonerLevel,
    puuid: basicInfoData.puuid,
    profileIconURL,
    profileBorderURL,
    profileRankedInfo,
    matchs: {
      data: matchsInfoData,
      start: 0,
      count: 10
    },
  };

  return userInfo;
};

export const fetchUserByPuuid = async (puuid: string) => {
  let userInfo = {};

  const basicInfoURL = `https://${constants.platform_routings.LA2}${constants.apis.summoner.puuid}${puuid}`;
  const basicInfoRequest = await fetch(basicInfoURL, {
    headers: getRiotAPIHeader(),
  });

  const basicInfoData: Record<string, any> = await basicInfoRequest.json();

  userInfo = {
    ...userInfo,
    id: basicInfoData.id,
    summonerName: basicInfoData.name,
    summonerLevel: basicInfoData.summonerLevel,
    puuid: basicInfoData.puuid,
  };

  return userInfo;
};