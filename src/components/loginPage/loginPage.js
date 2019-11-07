import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./loginPage.css";
import  getLogin  from '../../_helpers/login'; 
import  { auth }  from '../../actions/auth'; 

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    
    if (username && password) {
     
      getLogin().then((res) => {
        console.log (res.data)
        res.data.forEach( (user) => {
            if ((user.login === username) && (user.password === password)){
              this.props.auth( {user, isAuth: true} )
              console.log ("true")
            }
          } 
        )
      })
      console.log(`Вы вошли как ${username} с паролем ${password} !`);
    }
  }

  render() {
    const { username, password, submitted } = this.state;

    return (
      <div className="login-form">
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={
              "form-group" + (submitted && !username ? " has-error" : "")
            }
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {submitted && !username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            <Link to="/auth/register" className="btn btn-link">
              Register
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapState = (store) => {
  return { 
    user: store.user,
    isAuth: store.isAuth
  };
}

const mapToProps = dispatch => {
  return {
    auth: props => dispatch(auth(props))
  }
}

const connectedLoginPage = connect(mapState, mapToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
