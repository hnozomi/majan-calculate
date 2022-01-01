import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { GridTest } from "./GridTest";
import { Setting } from "./Setting";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <Setting /> */}
    <GridTest />
    {/* <App /> */}
  </StrictMode>,
  rootElement
);
