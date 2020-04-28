import React from 'react';
// import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  footerStyle : {
    backgroundColor: 'rgba(80, 170, 85, 0.493)',
    opacity: '0.4',
    fontSize: '15px',
    color: 'white',
    borderTop: '1px solid #E7E7E7',
    textAlign: 'left',
    left: '0',
    bottom: '0',
    height: '70px',
    padding: '1.5rem',
    width: 'calc(100% - 3rem)'
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.footerStyle}>
        <p>Raven's Eye Solutions ©</p>
      </div>
    </div>
  );
}


Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);