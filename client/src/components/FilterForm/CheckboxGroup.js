// React
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    paddingLeft: theme.spacing(10),
  },
  formControl: {
    margin: theme.spacing(3),
  },
  formLabel: {
    margin: '25px 0',
    textAlign: 'start',
  },
  formHelperText: {
    color: 'red',
    margin: '10px 0',
  },
  checkboxGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  checkboxLabel: {
    width: 185,
  },
}));

export default function CheckboxesGroup({ checkboxData, setCheckboxData }) {
  const offerings = Object.keys(checkboxData);
  const areAvailable = Object.values(checkboxData);

  const classes = useStyles();

  const handleChange = event => {
    setCheckboxData({
      ...checkboxData,
      [event.target.name]: event.target.checked,
    });
  };

  const error = areAvailable.filter(v => v).length < 1;

  const lookingFor = [];
  areAvailable.forEach((boolean, index) => {
    if (boolean) {
      lookingFor.length > 0 ?
      lookingFor.push(', ' + offerings[index]) :
      lookingFor.push(offerings[index]);
    }
  });

  return (
    <div className={classes.root}>
      <FormControl component='fieldset' className={classes.formControl}>
        {!error && <FormLabel component='legend' className={classes.formLabel}>
          Looking for: {lookingFor}
        </FormLabel>
        }
        {error && (
          <FormHelperText className={classes.formHelperText}>
            You must select at least one!
          </FormHelperText>
        )}
        <FormGroup className={classes.checkboxGroup}>

          {offerings.map((offering, index) => {
            return <FormControlLabel
              key={`${offering}-offering-${index}`}
              className={classes.checkboxLabel}
              control={
                <Checkbox
                  checked={areAvailable[index]}
                  onChange={handleChange}
                  name={offering}
                />
              }
              label={offering}
            />
          })}

        </FormGroup>
      </FormControl>
    </div>
  );
}
