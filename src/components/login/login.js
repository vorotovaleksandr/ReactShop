import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
  return(  
    <div>
      <Link to="/auth/login" className="login">login</Link>
    </div>
  )  
}

export default Login;