import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { getAllBusinesses } from '../../api/businessApi';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    lineHeight: '2.8rem',
    boxShadow: 'none',
    marginTop: '5rem',
  },
  intro: {
    textAlign: 'center',
    lineHeight: '2.8rem',
    fontSize: '1.5rem',
  },
});
function Admin(props) {
  const [businessData, setBusinessData] = useState();

  // API call
  useEffect(() => {
    async function getData() {
      setBusinessData(await getAllBusinesses());
    }
    getData();
  }, [setBusinessData]);

  const { classes } = props;
  console.log(businessData);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <h1>Admin Page</h1>
          </Paper>
          <ul>{businessData && businessData.map((data, i) => <li key={`${data}-${i}`}>{data.name}</li>)}</ul>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Admin);
