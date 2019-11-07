import React from "react";
import { Route, Redirect } from "react-router";
import  { LoginPage }  from '../../components/loginPage/loginPage';


const RoutAuth = ({isAuth, children, ...rest}) => {
  console.log (isAuth);
  return(
    <Route
      {...rest} 
      render={(props) => !isAuth 
        ? <LoginPage />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
    );  
  }

export default RoutAuth;