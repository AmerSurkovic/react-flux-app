import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <div>
    <Router>
      <App />
    </Router>
  </div>,
  document.getElementById("root")
);
