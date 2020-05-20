import React, { useEffect, useState } from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

// Local imports
import FilterForm from '../../components/FilterForm';
import LeafletMap from '../../components/leafletMap';
import Results from '../../components/Results';
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
    width: '100%',
  },
  intro: {
    textAlign: 'center',
    lineHeight: '2.8rem',
    fontSize: '1.5rem',
  },
  map: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5rem',
    marginBottom: '5rem',
  },
});

function Home(props) {
  const { classes } = props;
  const [position, setPosition] = useState({});
  const [businessData, setBusinessData] = useState([]);
  const [filteredBusinessData, setFilteredBusinessData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition(pos);
    });
  }, []);

  useEffect(() => {
    async function getData() {
      const data = await getAllBusinesses();
      setBusinessData(data);
      setFilteredBusinessData(data);
    }
    getData();
  }, []);

  const resetBusinessData = () => {
    setFilteredBusinessData(businessData);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}></Grid>
        <Grid item sm={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={4}></Grid>
          <Paper elevation={0} className={classes.map}>
            <LeafletMap curPosition={position} businessData={filteredBusinessData} />
          </Paper>
        </Grid>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <FilterForm
              position={position}
              setFilteredBusinessData={setFilteredBusinessData}
              resetBusinessData={resetBusinessData}
              businessData={businessData}
            />
          </Paper>
        </Grid>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            {filteredBusinessData.length !== businessData.length && <Results businessData={filteredBusinessData} />}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Home);
