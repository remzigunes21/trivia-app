import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/configureStore";

import "bootstrap/dist/css/bootstrap.min.css";
import "./appCss/index.css";
import "rc-slider/assets/index.css";
import "./assets/css/index.css";
ReactDOM.render(
  <Provider store={store}>
    <App className="app" />
  </Provider>,
  document.getElementById("root")
);
