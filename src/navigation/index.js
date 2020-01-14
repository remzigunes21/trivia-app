import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Welcome from "../pages/Welcome";
import Correct from "../components/AnswerCorrect";
import Dashboard from "../pages/Dashboard";
import Result from "../pages/Result";

const Routers = () => {
  return (
    <div className="app">
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/result" exact component={Result} />
            {/*   <Route path="/questions" exact component={Questions} />
            <Route path="/times-up" exact component={TimesUp} /> */}
            {/* <Route path="/answer" exact component={StreamsCreate} />
            <Route path="/streams/edit/:id" exact component={StreamsEdit} />
            <Route path="/streams/delete/:id" exact component={StreamsDelete} />
            <Route path="/streams/:id" exact component={StreamsShow} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Routers;
