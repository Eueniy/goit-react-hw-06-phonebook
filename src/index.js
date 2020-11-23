import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import PhoneBook from "./components/PhoneBook/PhoneBookContainer";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <PhoneBook />
  </Provider>,
  document.getElementById("root")
);
