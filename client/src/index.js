import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import allred from "./reducer/all-reducers";
import App from "./components/App";

const store = createStore(allred);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
