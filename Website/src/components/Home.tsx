import * as React from "react";
import * as Logo from "../static/logo.png";
import { useHistory } from "react-router-dom";
import "../styles/Home.scss";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const history = useHistory();
  const [searchValue, setSearch] = React.useState("");

  const pushToSummoner = (
    e?: React.KeyboardEvent<HTMLInputElement>,
    onClick?: boolean
  ) => {
    if ((e && e.key === "Enter") || onClick) {
      history.push(`/summoner/${searchValue}`);
    }
  };

  return (
    <>
      <div className="home">
        <div className="img">
          <img src={Logo} alt="OP.GG" />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Nombre de invocador..."
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => pushToSummoner(e)}
            value={searchValue}
          />
          <button type="button" onClick={(e) => pushToSummoner(null, true)}>
            .GG
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
