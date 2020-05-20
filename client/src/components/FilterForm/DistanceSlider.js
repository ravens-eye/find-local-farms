import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Slider, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 25,
    label: '25',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider({ setDistance }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id='discrete-slider-always' gutterBottom>
        Distance Away (miles)
      </Typography>
      <Slider
        defaultValue={25}
        getAriaValueText={valuetext}
        aria-labelledby='discrete-slider-always'
        step={5}
        marks={marks}
        valueLabelDisplay='auto'
        onChange={(e) => setDistance(Number(e.target.textContent))}
      />
    </div>
  );
}
