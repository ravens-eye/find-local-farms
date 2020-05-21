import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './DropDownNav.css';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MenuIcon style={{ height: '2.5rem', width: '2.5rem' }} />
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          className='menuItem'
          onClick={handleClose}
          component={Link}
          to='/'
        >
          Home
        </MenuItem>

        <MenuItem
          className='menuItem'
          onClick={handleClose}
          component={Link}
          to='/admin'
        >
          Admin
        </MenuItem>

        <Button id='log-in-button' target='_top'>
          <b>Log In</b>
        </Button>
      </Menu>
    </div>
  );
}
