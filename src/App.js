import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import DeveloperPage from "./pages/DeveloperPage";
import ResultPage from "./pages/ResultPage";
import WarningPage from "./pages/WarningPage";

function App({ props }) {
  return (
    <Switch>
      <Route
        exact
        path="/last/"
        render={(props) => <LandingPage props={props} />}
      ></Route>
      <Route
        path="/last/result/:finalType"
        render={(props) => <ResultPage props={props} {...props} />}
      ></Route>


      <Route
        exact
        path="/last/makers"
        render={(props) => <DeveloperPage props={props} />}
      ></Route>
      <Route path="/last/*">
        <WarningPage />
      </Route>
    </Switch>
  );
}

export default App;
