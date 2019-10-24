import React from "react";
import { Router, Route } from "react-router";
import "./main.css";
import Header from "./containers/header/header";
import Layout from "./containers/layout/layout";
import AuthUser from "./containers/authUser/authUser"
import { Provider } from 'react-redux'
import { store } from './store/configureStore'

const createHistory = require("history").createBrowserHistory;

const history = createHistory();

const Main = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="grid-container">
          <div className="header">
            <Header />
          </div>
          <div className="content">
            <Route path="/auth/login" component={AuthUser} />
            <Route path="/" component={Layout} />
          </div>
          <div className="footer"> exceed-team 2019 </div>
        </div>
      </Router>
    </Provider>
  );
};

export default Main;
