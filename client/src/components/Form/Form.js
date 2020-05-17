import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) =>
  createStyles({
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

  const handleChange = (event) => {
    setSource(event.target.value);
  };
  return (
    <>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Source
          </InputLabel>
          <Select
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            value={source}
            onChange={handleChange}
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
      </div>
    </>
  );
}
