import React from "react";
import { Router, Route } from "react-router";
import "./main.css";
import Header from "./components/header/header";
import Layout from "./components/layout/layout";
import QuestionTwo from "./components/HomeWork/HomeWork";

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
          <Route exact path="/" component={Layout} />
          <Route exact path='/example' component={QuestionTwo}/>

        </div>
        <div className="footer"> exceed-team 2019 </div>
      </div>
    </Router>
  );
};

export default Main;
