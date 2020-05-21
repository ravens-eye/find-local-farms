import React, { useContext }from 'react';
import { Link } from 'react-router-dom';

import ModalContext from '../../Context/ModalContext';

import './Nav.css';

export default function Nav () {
  const modal = useContext(ModalContext);

  return (
    <div className='navbar'>
      <Link to='/'>Find Local Farms</Link>

      <div className='links'>
        <Link to='/'>
          <b>Home</b>
        </Link>
        <Link to='/Admin'>
          <b>Admin</b>
        </Link>
        <Link to='login'>
          <b>Log In</b>
        </Link>
      </div>
    </div>
  );
}
