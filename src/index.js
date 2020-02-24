import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux"; //Import applyMiddleware to wire up thunk

import thunk from "redux-thunk"; //Import thunk

import App from "./components/App";
import reducers from "./reducers";

//redux store
const store = createStore(reducers, applyMiddleware(thunk)); //Wire thunk to Redux

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root"),
);
