import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
      <GlobalStyles />
    </Provider>
  </Router>,
  document.getElementById("root")
);
