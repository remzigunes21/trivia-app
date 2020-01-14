import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Correct from "../components/AnswerCorrect";
import Questions from "../pages/Questions";
import TimesUp from "../pages/TimesUp";

const Routers = () => {
  return (
    <div className="container" style={{ marginTop: "10px" }}>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/result" exact component={Correct} />
            <Route path="/questions" exact component={Questions} />
            <Route path="/times-up" exact component={TimesUp} />
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
