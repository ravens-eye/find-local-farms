import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DropDownNav from '../DropDownNav';
import './Nav.css';

const Nav = () => (
  <div className='navbar'>
    <Link to='/'>Find Local Farms</Link>
    <div className='links'>
      <Link to='/'>Home</Link>
      <Link to='/Admin'>Admin</Link>
      <Button id='log-in-button' target='_top'>
        Log In
      </Button>
    </div>
    <div className='dropdown'>
      <DropDownNav />
    </div>
  </div>
);

export default Nav;
