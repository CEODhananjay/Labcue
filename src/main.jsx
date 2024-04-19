import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './sass/_style.scss';
import { BrowserRouter } from "react-router-dom"


//BOOTSTRAP
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);