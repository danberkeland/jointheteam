import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 300
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FoodExperience({ kitchenExp, setKitchenExp }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setKitchenExp(event.target.value);
  };

  return (
    <div>
      
      
      
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Kitchen Experience
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={kitchenExp}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value={"Not much but ready to learn"}>Not much but ready to learn</MenuItem>
          <MenuItem value={"A little bit of restaurant experience"}>A little bit of restaurant experience</MenuItem>
          <MenuItem value={"A lot of restaurant experience"}>A lot of restaurant experience</MenuItem>
        </Select>
      
      </FormControl>
      
    </div>
  );
}
