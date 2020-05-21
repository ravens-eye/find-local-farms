import React from 'react';
import { Link } from 'react-router-dom';
import DropDownNav from '../DropDownNav';
import './Nav.css';

const Nav = () => (
  <>
    <div className="navbar">
      <Link to="/">Find Local Farms</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link id="log-in-button" to="/auth">
          Log In
        </Link>
      </div>
      <div className="dropdown">
        <DropDownNav />
      </div>
    </div>
    <div className="spacer"></div>
  </>
);

export default Nav;
