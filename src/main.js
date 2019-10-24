import React from "react";
import { Router, Route } from "react-router";
import "./main.css";
import Header from "./components/header/header";
import Layout from "./components/layout/layout";

const createHistory = require("history").createBrowserHistory;

const history = createHistory();

const Main = () => {
  return (
    <Router history={history}>
      <div className="grid-container">
        <div className="header">
          <Route path="/" component={Header} />
        </div>
        <div className="content">
          <Route path="/" component={Layout} />
        </div>
        <div className="footer"> exceed-team 2019 </div>
      </div>
    </Router>
  );
};

export default Main;
