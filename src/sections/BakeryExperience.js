import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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

export default function BakeryExperience({ bakeryExp, setBakeryExp }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setBakeryExp(event.target.value);
  };

  return (
    <div>
      
      
      
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Bakery Experience
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={bakeryExp}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value={"Not much but I bake at home"}>Not much but I bake at home</MenuItem>
          <MenuItem value={"A little bit of bakery experience"}>A little bit of bakery experience</MenuItem>
          <MenuItem value={"A lot of bakery experience"}>A lot of bakery experience</MenuItem>
        </Select>
      
      </FormControl>
      
    </div>
  );
}
