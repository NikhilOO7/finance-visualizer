import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import stockDataReducer from "./store/reducers/stockData";
import portfolioReducer from "./store/reducers/portfolio"
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  stockData: stockDataReducer,
  portfolio: portfolioReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
