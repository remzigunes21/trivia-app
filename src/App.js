import React, { Component } from "react";
import Home from "./pages/Home";
import Routers from "./navigation";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Routers />
      </div>
    );
  }
}

export default App;
