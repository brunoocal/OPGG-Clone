import * as React from "react";
import * as Logo from "../static/logo.png";
import "../styles/Home.scss";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className="home">
        <div className="img">
          <img src={Logo} alt="OP.GG" />
        </div>
        <div className="search">
          <input type="text" placeholder="Nombre de invocador..." />
          <button type="button">.GG</button>
        </div>
      </div>
    </>
  );
};

export default Home;
