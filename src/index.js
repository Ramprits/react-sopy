import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { SoftUIControllerProvider } from "context";
import store from "app/store";

ReactDOM.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SoftUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
