import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import JoeBiden from "./JoeBiden";
import GlobalStyles from "./GlobalStyles";
import ElonMusk from "./ElonMusk";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/musk">
            <ElonMusk />
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
