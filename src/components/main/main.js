import React from 'react';
import './main.css';
import Login from '../login/login';
import Title from '../title/title';
import Nav from '../nav/nav';
import Content from '../content/content'


const Main = () => {
  return (
    <div className="grid-container">
      <div className="header"><Title /></div>
      <div className="login"><Login /></div>
      <div className="content"><Content /></div>
      <div className="nav"><Nav /></div>
      <div className="footer"> exceed-team 2019 </div>
    </div>
  );
}

export default Main;
