import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MooseMagic } from "./MooseMagic.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <MooseMagic />
    <div className="backgroundImageFilter" />
    <div className="backgroundImage" />
  </React.StrictMode>
);
