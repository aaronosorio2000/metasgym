import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import GoalsMemory from "./Memory/Goals";
import AuthMemory from "./Memory/Auth";

ReactDOM.render(
  <React.StrictMode>
    <AuthMemory>
      <GoalsMemory>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoalsMemory>
    </AuthMemory>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
