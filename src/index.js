import React from "react";
import ReactDOM from "react-dom";
import { AppRouters } from "./routers/AppRouters";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <AppRouters />
  </React.StrictMode>,
  document.getElementById("root")
);
