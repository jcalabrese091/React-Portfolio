import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import NoMatch from "./components/nomatch/NoMatch";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
