import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

// Material-UI Imports
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Local imports
import DistanceSlider from './DistanceSlider';
import CheckboxGroup from './CheckboxGroup';

import data from '../../data/demo.json';

function haversineCalc(la1,la2,lo1,lo2){
  const R = 6371e3; // meters
  const φ1 = (la1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (la2 * Math.PI) / 180;
  const Δφ =
    ((la2 - la1) *
      Math.PI) /
    180;
  const Δλ =
    ((lo2 - lo1) *
      Math.PI) /
    180;
  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c * 0.000621371; // in miles
}

const useStyles = makeStyles((theme) =>
  createStyles({
    formRowOne: {
      display: 'flex',
      justifyContent: 'space-around',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    delivery: {
      [theme.breakpoints.down('xs')]: {
        order: 1,
      },
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    btnGrp: {
      display: 'inline-grid',
    },
    clearBtn: {
      fontSize: '0.7rem',
    },
  })
);

export default function Form({ position, setResults }) {
  const classes = useStyles();
  const [source, setSource] = useState('All');
  const [delivery, setDelivery] = useState('Delivery');
  const [distance, setDistance] = useState(25);
  const [checkboxData, setCheckboxData] = useState({
    chicken: false,
    beef: false,
    pork: false,
    lamb: false,
    eggs: false,
    rabbit: false,
    micro: false,
    honey: false,
    flowers: false,
    other: false,
  });

  useEffect(() => console.log(source, delivery, distance, checkboxData), [
    source,
    delivery,
    distance,
    checkboxData,
  ]);

  const handleChangeSource = (event) => {
    setSource(event.target.value);
  };

  const handleChangeDelivery = (event) => {
    setDelivery(event.target.value);
  };

  const getResults = () => {
    var checkboxTerms = [];
    for (var key in checkboxData) {
      if (checkboxData[key]) {
        checkboxTerms.push(key);
      }
    }
    return data.features
      .filter((item) =>
        checkboxTerms.every((el) =>
          item.properties.OFFER.toLowerCase().includes(el)
        )
      )
      .map((item) => {
        let d=haversineCalc(
          position.coords.latitude,
          item.geometry.coordinates[1],
          position.coords.longitude,
          item.geometry.coordinates[0]
        );
        if (d <= distance) {
          return item;
        }
      })
      .filter((item) => item);
  };

  const handleSearch = async () => {
    position.coords &&
      setResults(getResults());
  };

  return (
    <>
      <div className={classes.formRowOne}>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id='sourceLabel'>
            Source
          </InputLabel>
          <Select
            labelId='sourceLabel'
            id='sourcePlaceholder'
            value={source}
            onChange={handleChangeSource}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value='All'>
              <em>All</em>
            </MenuItem>
            <MenuItem value={'Farm'}>Farm</MenuItem>
            <MenuItem value={'Market'}>Market</MenuItem>
            <MenuItem value={'Creamery'}>Creamery</MenuItem>
            <MenuItem value={'Bakery'}>Bakery</MenuItem>
          </Select>
        </FormControl>
        <DistanceSlider distance={distance} setDistance={setDistance} />
        <FormControl className={clsx(classes.formControl, classes.delivery)}>
          <InputLabel shrink id='deliveryLabel'>
            Delivery Method
          </InputLabel>
          <Select
            labelId='deliveryLabel'
            id='deliveryPlaceholder'
            value={delivery}
            onChange={handleChangeDelivery}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value='Delivery'>
              <em>Delivery</em>
            </MenuItem>
            <MenuItem value={'Pickup'}>Pickup</MenuItem>
            <MenuItem value={'Curbside'}>Curbside</MenuItem>
            <MenuItem value={'Other'}>Other</MenuItem>
          </Select>
        </FormControl>
      </div>
      <CheckboxGroup
        checkboxData={checkboxData}
        setCheckboxData={setCheckboxData}
      />
      <div className={classes.btnGrp}>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => handleSearch()}
        >
          Search
        </Button>
        <Button
          color='primary'
          onClick={() => setResults([])}
          className={classes.clearBtn}
        >
          Clear
        </Button>
      </div>
    </>
  );
}
