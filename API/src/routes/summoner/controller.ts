import { fetchUser, fetchUserByPuuid } from "./fetching";

export const getUser = (summonerName: string) => {
  return new Promise((resolve, reject) => {
    resolve(fetchUser(summonerName));
  });
};

export const getUserByPuuid = (puuid: any) => {
  return new Promise((resolve, reject) => {
    resolve(fetchUserByPuuid(puuid));
  });
};
