import React, { useState } from 'react';

// Material-UI Imports
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

// Local imports
import DistanceSlider from './DistanceSlider';
import CheckboxGroup from './CheckboxGroup';

const useStyles = makeStyles(theme =>
  createStyles({
    formRowOne: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
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

export default function FilterForm({ setResults }) {
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

  const handleChangeSource = (event) => {
    setSource(event.target.value);
  };

  const handleChangeDelivery = (event) => {
    setDelivery(event.target.value);
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
        <FormControl className={classes.formControl}>
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
          onClick={() => setResults([0, 1, 2, 3, 4, 5, 6, 7, 8])}
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
