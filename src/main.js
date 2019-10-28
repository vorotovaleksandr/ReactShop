import React from "react";
import { Router, Route } from "react-router";
import "./main.css";
import Header from "./containers/header/header";
import Layout from "./containers/layout/layout";
import AuthUser from "./containers/authUser/authUser"
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import { history } from './_helpers/history'

const Main = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="grid-container">
          <div className="header">
            <Header />
          </div>
          <div className="content">
            <Route exact path="/auth/login" component={AuthUser} />
            <Route exact path="/auth/register" component={AuthUser} />
            <Route exact path="/products" component={Layout} />
            <Route exact path="/shops" component={Layout} />
            <Route exact path="/myproducts" component={Layout} />
            <Route exact path="/myshop" component={Layout} />
            <Route exact path="/admin" component={Layout} />
            <Route exact  path="/" component={Layout} />
          </div>
          <div className="footer"> exceed-team 2019 </div>
        </div>
      </Router>
    </Provider>
  );
};

export default Main;
