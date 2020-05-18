import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingLeft: theme.spacing(10),
  },
  formControl: {
    margin: theme.spacing(3),
  },
  formLabel: {
    margin: "25px 0",
    textAlign: "start",
  },
  formHelperText: {
    color: "red",
    margin: "10px 0",
  },
  checkboxGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  checkboxLabel: {
    width: 185,
  },
}));

export default function CheckboxesGroup({ checkboxData, setCheckboxData }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setCheckboxData({
      ...checkboxData,
      [event.target.name]: event.target.checked,
    });
  };

  const {
    chicken,
    beef,
    pork,
    lamb,
    eggs,
    rabbit,
    micro,
    honey,
    flowers,
    other,
  } = checkboxData;
  const error =
    [
      chicken,
      beef,
      pork,
      lamb,
      eggs,
      rabbit,
      micro,
      honey,
      flowers,
      other,
    ].filter((v) => v).length < 1;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" className={classes.formLabel}>
          Looking for:{" "}
        </FormLabel>
        {error && (
          <FormHelperText className={classes.formHelperText}>
            You must select at least one!
          </FormHelperText>
        )}
        <FormGroup className={classes.checkboxGroup}>
          <FormControlLabel
            className={classes.checkboxLabel}
            control={
              <Checkbox
                checked={chicken}
                onChange={handleChange}
                name="chicken"
              />
            }
            label="Chicken"
          />
          <FormControlLabel
            className={classes.checkboxLabel}
            control={
              <Checkbox checked={beef} onChange={handleChange} name="beef" />
            }
            label="Beef"
          />
          <FormControlLabel
            className={classes.checkboxLabel}
            control={
              <Checkbox checked={pork} onChange={handleChange} name="pork" />
            }
            label="Pork"
          />
          <FormControlLabel
            className={classes.checkboxLabel}
            control={
              <Checkbox checked={lamb} onChange={handleChange} name="lamb" />
            }
            label="Lamb"
          />
          <FormControlLabel
            className={classes.checkboxLabel}
            control={
              <Checkbox checked={eggs} onChange={handleChange} name="eggs" />
            }
            label="Eggs"
          />
          <FormControlLabel
            className={classes.checkboxLabel}
            control={
              <Checkbox
                checked={rabbit}
                onChange={handleChange}
                name="rabbit"
              />
            }
            label="Rabbit"
          />
          <FormControlLabel
            className={classes.checkboxLabel}
            control={
              <Checkbox checked={micro} onChange={handleChange} name="micro" />
            }
            label="MicroGreens"
          />
          <FormControlLabel
            className={classes.checkboxLabel}
            control={
              <Checkbox checked={honey} onChange={handleChange} name="honey" />
            }
            label="Honey"
          />
          <FormControlLabel
            className={classes.checkboxLabel}
            control={
              <Checkbox
                checked={flowers}
                onChange={handleChange}
                name="flowers"
              />
            }
            label="Flowers"
          />
          <FormControlLabel
            className={classes.checkboxLabel}
            control={
              <Checkbox checked={other} onChange={handleChange} name="other" />
            }
            label="Other"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
