import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footerStyle: {
    backgroundColor: 'rgba(0, 0, 0, .2)',
    color: 'white',
    borderTop: '1px solid #E7E7E7',
    textAlign: 'center',
    left: '0',
    bottom: '0',
    right: '0',
    height: '2.5rem',
    paddingBottom: '1.25rem',
    position: 'absolute',
  },
  padding: {
    minHeight: '2.5rem',
  },
});

function Footer(props) {
  const { classes } = props;
  return (
    <>
      <div className={classes.padding}></div>
      <footer className={classes.footerStyle}>
        <p>Raven's Eye Solutions ©</p>
      </footer>
    </>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
