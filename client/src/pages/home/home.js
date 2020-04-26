  import React from 'react';
  import PropTypes from 'prop-types';
  import { withStyles } from '@material-ui/core/styles';
  import Paper from '@material-ui/core/Paper';
  import Grid from '@material-ui/core/Grid';
  // import { Link } from 'react-router-dom';
  import './home.css'

  const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      lineHeight: '45px',
      boxShadow: 'none',
      // borderStyle: 'solid',
      // borderWidth: '2px',
    },
    intro: {
      textAlign: 'center',
      lineHeight: '45px',
      fontSize: '25px',
      
    },
  
    
  });
  
  function Home(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
    
          <Grid item xs={12}>
            {/* <Paper className='colorShift'>
              <br/>
            </Paper> */}
          </Grid>
          <Grid item sm={12}>
          <Paper className={classes.paper}>
          <h3>Find Local Farms</h3>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
         
            <p>I am going to be map</p>
          
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
  