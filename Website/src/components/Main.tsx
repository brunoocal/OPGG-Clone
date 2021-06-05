import * as React from "react";
import Header from "./Header";
import ChampionsStatistics from "./ChampionsStatistics";
import Statistics from "./Statistics";
import Rankings from "./Rankings";
import Multi from "./Multi";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";

export interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <>
      <Header />
      <Switch>
          <Route exact path="/champion/statistics">
            <ChampionsStatistics />
          </Route>
          <Route exact path="/statistics">
              <Statistics />
          </Route>
          <Route exact path="/ranking">
              <Rankings />
          </Route>
          <Route exact path="/multi">
              <Multi />
          </Route>
          <Route>
            <Home />
          </Route>
      </Switch>
    </>
  );
};

export default Main;
