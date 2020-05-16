import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LMap from '../../components/leafletMap';


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
  },
  intro: {
    textAlign: 'center',
    lineHeight: '45px',
    fontSize: '25px',
  },
  map: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5rem',
    marginBottom: '5rem'
  },
});

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}></Grid>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={4}></Grid>
          <Paper className={classes.map}>
            <LMap />
          </Paper>
        </Grid>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
