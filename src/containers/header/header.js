import React from 'react';
import './header.css';
import Title from '../../components/title/title';
import Login from '../../components/login/login';

const Header = () => {
  return (
    <div className="header-container">
      <div className="title"><Title /></div>
      <div className="login"><Login /></div>
    </div>
  );
}

export default Header;