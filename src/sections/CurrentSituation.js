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

export default function CurrentSituation({ current, setCurrent }) {
  const classes = useStyles();
  

  const handleChange = (event) => {
    setCurrent(event.target.value);
  };

  return (
    <div>
      
      
      
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Current Situation
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={current}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value={"Not currently employed"}>Not currently employed</MenuItem>
          <MenuItem value={"Employed, but looking for a change"}>Employed, but looking for a change</MenuItem>
          <MenuItem value={"Employed, looking for additional work"}>Employed, looking for additional work</MenuItem>

          <MenuItem value={"Student"}>Student</MenuItem>
        </Select>
      
      </FormControl>
      
    </div>
  );
}
