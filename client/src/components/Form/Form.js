import React from "react";

// Material-UI Imports
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// Local imports
import DistanceSlider from './DistanceSlider';

const useStyles = makeStyles((theme) =>
  createStyles({
    formRowOne: {
      display: "flex",
      justifyContent: "space-around"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function Form() {
  const classes = useStyles();
  const [source, setSource] = React.useState("All");
  const [delivery, setDelivery] = React.useState("Delivery");

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
            <MenuItem value={"Farm"}>Farm</MenuItem>
            <MenuItem value={"Market"}>Market</MenuItem>
            <MenuItem value={"Creamery"}>Creamery</MenuItem>
            <MenuItem value={"Bakery"}>Bakery</MenuItem>
          </Select>
        </FormControl>
        <DistanceSlider />
        <FormControl className={classes.formControl}>
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
            <MenuItem value="Delivery">
              <em>Delivery</em>
            </MenuItem>
            <MenuItem value={"Pickup"}>Pickup</MenuItem>
            <MenuItem value={"Curbside"}>Curbside</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
}
