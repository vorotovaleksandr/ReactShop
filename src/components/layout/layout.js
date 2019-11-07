import React from 'react';
import './layout.css';
import Nav from '../nav/nav';
import Content from '../content/content'

const Layout = () => {
    return (
        <div className="layout-container">
            <div className="nav"><Nav/></div>
            <div className="content"><Content/></div>
        </div>
    );
}

export default Layout;