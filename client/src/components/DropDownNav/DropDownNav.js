// React
import React from 'react';

// Material UI
import { Button, Menu, MenuItem } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons';

import { Link } from 'react-router-dom';

import './DropDownNav.css'
 
class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >         
          <MenuIcon style={{height: '40px', width: '40px'}} />         
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem className="menuItem" onClick={this.handleClose} component={Link} to="/">Home</MenuItem>
          {/* <MenuItem className="menuItem" onClick={this.handleClose} component={Link} to="/admin">admin</MenuItem> */}
          <MenuItem className="menuItem" onClick={this.handleClose} component={Link} to="/admin">Admin</MenuItem>

          <Link to='/login'>
            <Button id="menuItem" target="_top">
              <b>Log In</b>
            </Button> 
          </Link>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;