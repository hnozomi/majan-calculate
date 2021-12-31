import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Setting } from "./Setting";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Setting />
    {/* <App /> */}
  </StrictMode>,
  rootElement
);
