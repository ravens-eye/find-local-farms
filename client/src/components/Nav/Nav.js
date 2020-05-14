import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import DropDownNav from '../DropDownNav'
import './Nav.css'
// import { orange } from '@material-ui/core/colors';
class Nav extends React.Component {
  state = {
  
  };

  render() {
   

    return (
      <React.Fragment>
      <div className="navbar">
        
    
          <Link to="/">Find Local Farms</Link>
       
        
          <div className="links">
          <Link to="/"><b>Home</b></Link>
          <Link to="/mapPage"><b>Test</b></Link>
          {/* <Link to='/admin'><b>Admin</b></Link> */}
          <Button id="menuItem" target="_top"><b>Log In</b></Button> 
        </div>
        <div className="dropdown">
        <DropDownNav />
         </div>
          {/* <a href="#">Link 2</a>
          <a href="#">Link 3</a>

          {/* dropdown menu */}
          
      
    </div>
    </React.Fragment>
    );
  }
}

export default Nav;


