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

export const fetchMatch = async (matchId: string) => {
  let matchInfo = {};

  const matchInfoURL = `https://${constants.regional_routings.AMERICAS}${constants.apis.matches.getMatchWithId}${matchId}`;
  const matchInfoRequest = await fetch(matchInfoURL, {
    headers: getRiotAPIHeader(),
  });

  const matchInfoData: Record<string, any> = await matchInfoRequest.json();

  const participantData = [];

  console.log(matchInfoData);

  try {
    for (const participant of matchInfoData.info.participants) {
      const participantDisplayInfo = {
        summonerName: participant.summonerName,
        displayImageChampionURL: `${constants.datadragon.base}${constants.datadragon.champion.square}${participant.championName}.png`,
      };
      participantData.push(participantDisplayInfo);
    }
  } catch (e) {
    participantData.push(matchInfoData);
  }

  matchInfo = {
    ...matchInfoData,
    firstDisplayeableData: participantData,
  };

  return matchInfo;
};
