import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper white" >
          <Link to={'/'} href="/" className="brand-logo left">
            Instagram
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to={"/signin"}> SignIn</Link>
            </li>
            <li>
              <Link to={'/signup'} >signUp</Link>
            </li>
            <li>
              <Link to={'/profile'}>Profile</Link>
              </li>
              <li>
              <Link to={'/createpost'}>Create</Link>
            </li>
         
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
