import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    lineHeight: '45px',
    boxShadow: 'none',
    marginTop: '5rem'
  },
  intro: {
    textAlign: 'center',
    lineHeight: '45px',
    fontSize: '25px',
  },
});


function Admin(props){
  const { classes } = props;

  return(
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
          <h1>Admin Page</h1>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Admin);