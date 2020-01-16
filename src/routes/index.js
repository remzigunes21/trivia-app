import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Welcome from "../pages/Welcome";
import Dashboard from "../pages/Dashboard";
import Result from "../pages/Result";
import TimesUp from "../pages/TimesUp";

const Routers = () => {
  return (
    <div className="app">
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/result" exact component={Result} />
            <Route path="/times-up" exact component={TimesUp} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Routers;
