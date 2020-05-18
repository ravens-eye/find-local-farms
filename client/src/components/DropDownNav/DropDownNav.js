import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import './DropDownNav.css';
import MenuIcon from '@material-ui/icons/Menu';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
          <MenuIcon style={{ height: '40px', width: '40px' }} />
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          <MenuItem className="menuItem" onClick={this.handleClose} component={Link} to="/">
            Home
          </MenuItem>
          {/* <MenuItem className="menuItem" onClick={this.handleClose} component={Link} to="/admin">admin</MenuItem> */}
          <MenuItem className="menuItem" onClick={this.handleClose} component={Link} to="/admin">
            Admin
          </MenuItem>
          <Button id="menuItem" target="_top">
            <b>Log In</b>
          </Button>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
