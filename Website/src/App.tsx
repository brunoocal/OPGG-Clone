import Main from "./components/Main";
import SummonerPage from "./components/SummonerPage";
import SummonerSearch from "./components/SummonerSearch";
import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/reset.scss";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/summoner/:summonerName">
            <SummonerPage />
          </Route>
          <Route path="/summoner">
            <SummonerSearch />
          </Route>
          <Route>
            <Main />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
