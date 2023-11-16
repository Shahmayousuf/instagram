import React from "react";
import './SignIn.css'
import {Link} from 'react-router-dom'
const SignIn = () => {
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="password"></input>
        <button class="btn waves-effect waves-light #64b5f6 blue darken-1">Login</button>
        <h5>
          <Link to={'/signup'}>dont have an account?</Link>
        </h5>
      </div>
    </div>
  );
};

export default SignIn;
