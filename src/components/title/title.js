import React from 'react';
import { Link } from 'react-router-dom';
import './title.css';

const Title = () => {
  return(
    <div>
      <Link to="/" className="title" >Marketplace</Link>
    </div>
  );
}

export default Title;