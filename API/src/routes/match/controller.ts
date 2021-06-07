import { fetchMatch } from "./fetching";

export const getMatch = (matchId: string) => {
  return new Promise((resolve, reject) => {
    resolve(fetchMatch(matchId));
  });
};
