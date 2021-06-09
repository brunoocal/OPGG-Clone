import * as React from "react";
import Header from "./Header";
import Match from "./Match";
import { useParams } from "react-router-dom";
import "../styles/SummonerPage.scss";

export interface SummonerPageProps {}

const SummonerPage: React.FC<SummonerPageProps> = () => {
  const { summonerName } = useParams<{ summonerName: null }>();
  const [basicSummonerData, setSummonerData] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const basicSummonerRequest = await fetch(
        `http://localhost:3005/summoner/${summonerName}`,
        { mode: "cors" }
      );
      const { body } = await basicSummonerRequest.json();
      setSummonerData(body);
    })();
  }, []);

  const translateType = (type: string) => {
    const types: Record<string, string> = {
      RANKED_FLEX_SR: "Clasificatoria flexible",
      RANKED_SOLO_5x5: "Clasificatoria en solitario",
    };
    return types[type] || "Sin Clasificar";
  };

  return (
    <>
      <Header heightMode="short" />
      <div className="SummonerPage">
        {basicSummonerData && (
          <>
            <section className="ProfileInfo">
              <div className="profileIcon">
                <img className="icon" src={basicSummonerData.profileIconURL} />
              </div>
              <h1 className="profileInfoHeading">
                {basicSummonerData.summonerName}
              </h1>

              <hr />

              {basicSummonerData.profileRankedInfo
                .reverse()
                .map((ranked: Record<string, any>, i: number) => {
                  return (
                    <>
                      <div className="container" key={ranked.leagueId}>
                        <div
                          className={`emblem-container ${i === 0 && "first"}`}
                        >
                          <img className="emblem" src={ranked.rankEmblemURL} />
                        </div>
                        <span className="ranked-span">
                          {translateType(ranked.queueType)}
                        </span>
                        <h1 className="ranked-title">
                          {ranked.tier} {ranked.rank} -
                          <span className="rankeds-lp">
                            {" "}
                            {ranked.leaguePoints} LP
                          </span>
                        </h1>
                        <h2 className="ranked-subtitle">
                          <span className="wins">{ranked.wins}V</span> -
                          <span className="losses"> {ranked.losses}L</span> (
                          {ranked.winrate})
                        </h2>
                      </div>
                    </>
                  );
                })}
            </section>
            <section className="ProfileGames">
              {basicSummonerData.matchs.data.map((match: string) => (
                <Match matchId={match} />
              ))}
            </section>
            <section className="ProfileStats"></section>
          </>
        )}
      </div>
    </>
  );
};

export default SummonerPage;
