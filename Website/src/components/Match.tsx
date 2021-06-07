import * as React from "react";
import "../styles/Match.scss";
export interface MatchProps {
  matchId: string;
}

const Match: React.FC<MatchProps> = ({ matchId }) => {
  const [data, setData] = React.useState(null);
  const [splittedMatchParticipants, setMatchParticipants] =
    React.useState(null);

  React.useEffect(() => {
    if (!data) {
      (async () => {
        const reqUrl = `http://localhost:3005/match/${matchId}`;
        console.log(reqUrl);
        const req = await fetch(reqUrl);
        const { body } = await req.json();
        setData(await body);

        console.log(body);
        const partsData = await body.firstDisplayeableData;

        setMatchParticipants([partsData.slice(0, 5), partsData.slice(5, 10)]);
      })();
    }
  }, []);

  if (!data) {
    return (
      <>
        <div className="match">template skeleton loading</div>
      </>
    );
  }

  return (
    <>
      <div className="match">
          <div className="resto">
              
          </div>
        <div className="teams">
          {splittedMatchParticipants &&
            splittedMatchParticipants.map((team: Record<string, string>[]) => (
              <>
                <div className="team">
                  {team.map((participant: Record<string, string>) => (
                    <>
                      <div className="participant">
                        <div className="champion">
                          <img src={participant.displayImageChampionURL} />
                        </div>
                        <div className="name">
                          <p>
                            {participant.summonerName.length > 10
                              ? participant.summonerName
                                  .slice(0, 11)
                                  .concat("...")
                              : participant.summonerName}
                          </p>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Match;
