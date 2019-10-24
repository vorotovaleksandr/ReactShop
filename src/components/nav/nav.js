import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <div className="nav">
      <li><Link to="/products" className="link">Products</Link></li>
      <li><Link to="/shops" className="link">Shops</Link></li>
      <li><Link to="/myproducts" className="link">My products</Link></li>
      <li><Link to="/myshop" className="link">My shop</Link></li>
      <li><Link to="/admin" className="link">Admin</Link></li>
    </div>
  );
}

export default Nav;