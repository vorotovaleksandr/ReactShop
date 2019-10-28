import React from 'react';
import { Router} from "react-router";
import { history } from '../../_helpers/history';
import RoutAuth from '../../components/RouteAuth'

const AuthUser = () => {
  return( 
    <Router history={history}>
      <div className="auth-user">
        <RoutAuth exact path="/auth/login" />
      </div>
    </Router>
  )  
}

export default AuthUser;