import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Home from "./Home";
import OtherSite from "./OtherSite";
import clapping from "./src/asset/001-clapping.svg";

const App = ({ children }) => (
  <div>
    <svg viewBox={clapping.viewBox}>
      <use xlinkHref={"#" + clapping.id} />
    </svg>
    <nav>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="othersite">
        <h2>OtherSite</h2>
      </Link>
    </nav>
    <Router>
      <Home path="/" />
      <OtherSite path="othersite" />
    </Router>
  </div>
);

render(<App />, document.getElementById("app"));
