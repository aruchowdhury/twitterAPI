import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import JoeBiden from "./JoeBiden";
import GlobalStyles from "./GlobalStyles";
import HilariClinton from "./HilariClinton";

// Using react router created 2 routes for displaying
// HilariClinton and JoeBiden components

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/hilari">
            <HilariClinton />
          </Route>
          <Route exact path="/biden">
            <JoeBiden />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
