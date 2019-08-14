import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { LightTheme, BaseProvider } from "baseui";

const engine = new Styletron();

ReactDOM.render(
  // eslint-disable-next-line no-undef
  <StyletronProvider value={engine} debugAfterHydration>
    <BaseProvider theme={LightTheme}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </BaseProvider>
  </StyletronProvider>
  , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
