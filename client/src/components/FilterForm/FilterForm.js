import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

// Material-UI Imports
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

// Local imports
import DistanceSlider from './DistanceSlider';
import CheckboxGroup from './CheckboxGroup';
import haversineCalc from '../../utils/haversineCalc';

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
  }),
);

export default function FilterForm({ position, setFilteredBusinessData, resetBusinessData, businessData }) {
  const classes = useStyles();
  const [source, setSource] = useState('All');
  const [delivery, setDelivery] = useState('delivery');
  const [distance, setDistance] = useState(100);
  const [checkboxData, setCheckboxData] = useState({
    chicken: false,
    beef: false,
    pork: false,
    lamb: false,
    eggs: false,
    rabbit: false,
    microgreens: false,
    honey: false,
    flowers: false,
    other: false,
  });

  useEffect(() => {
    getFilteredBusinesses();
  });

  const sourceArr = ['Farm', 'Market', 'Creamery', 'Bakery'];

  const handleChangeSource = (event) => {
    setSource(event.target.value);
  };

  const handleChangeDelivery = (event) => {
    setDelivery(event.target.value);
  };

  const getFilteredBusinesses = () => {
    var checkboxTerms = [];
    for (var key in checkboxData) {
      if (checkboxData[key]) {
        checkboxTerms.push(key);
      }
    }
    return businessData
      .filter((biz) => {
        if (source === 'All') return true;
        return biz.type === source;
      })
      .filter((biz) => biz.features.indexOf(delivery) !== -1)
      .filter((biz) =>
        checkboxTerms.every((el) => biz.offerings.indexOf(el.charAt(0).toUpperCase() + el.slice(1)) !== -1),
      )
      .map((item) => {
        let d = haversineCalc(
          position.coords ? position.coords.latitude : 34.92673,
          item.location[0].lat,
          position.coords ? position.coords.longitude : -77.944321,
          item.location[0].lng,
        );
        if (d <= distance) {
          return item;
        } else {
          return null;
        }
      })
      .filter((item) => item);
  };

  const handleSearch = async () => {
    position.coords && setFilteredBusinessData(getFilteredBusinesses());
  };

  return (
    <>
      <div className={classes.formRowOne}>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="sourceLabel">
            Source
          </InputLabel>
          <Select
            labelId="sourceLabel"
            id="sourcePlaceholder"
            value={source}
            onChange={handleChangeSource}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value="All">
              <em>All</em>
            </MenuItem>
            {sourceArr.map((source) => (
              <MenuItem key={source} value={source.toLowerCase()}>
                {source}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <DistanceSlider distance={distance} setDistance={setDistance} />
        <FormControl className={clsx(classes.formControl, classes.delivery)}>
          <InputLabel shrink id="deliveryLabel">
            Delivery Method
          </InputLabel>
          <Select
            labelId="deliveryLabel"
            id="deliveryPlaceholder"
            value={delivery}
            onChange={handleChangeDelivery}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value="delivery">
              <em>Delivery</em>
            </MenuItem>
            <MenuItem value={'onlineOrder'}>Online</MenuItem>
            <MenuItem value={'curbsidePickup'}>Curbside</MenuItem>
            <MenuItem value={'other'}>Other</MenuItem>
          </Select>
        </FormControl>
      </div>
      <CheckboxGroup checkboxData={checkboxData} setCheckboxData={setCheckboxData} />
      <div className={classes.btnGrp}>
        <Button variant="contained" color="secondary" onClick={() => handleSearch()}>
          Search
        </Button>
        <Button color="primary" onClick={() => resetBusinessData()} className={classes.clearBtn}>
          Clear
        </Button>
      </div>
    </>
  );
}
