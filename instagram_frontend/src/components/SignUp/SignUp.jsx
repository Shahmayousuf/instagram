import React from "react";
import './SignUp.css'
import {Link} from 'react-router-dom'
const SignUp = () => {
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="password"></input>

        <button class="btn waves-effect waves-light #64b5f6 blue darken-1">SignUp</button>
        <h5>
          <Link to={'/signin'}>Already have an Account?</Link>
        </h5>
      </div>
    </div>
  );
};

export default SignUp;
