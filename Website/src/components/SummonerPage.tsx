import * as React from "react";
import { useParams } from "react-router-dom";

export interface SummonerPageProps {}

const SummonerPage: React.FC<SummonerPageProps> = () => {
  const { summonerName } = useParams<{ summonerName: null }>();

  return (
    <>
      <div className="div">summoner name: ${summonerName}</div>
    </>
  );
};

export default SummonerPage;
