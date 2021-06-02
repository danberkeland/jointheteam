
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function Position({ position, setPosition }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setPosition({ ...position, [event.target.name]: event.target.checked });
  };

  const { Baker, Cook, Cashier, Barista, Driver } = position;
  

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">For which position are you applying?</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={Baker} onChange={handleChange} name="Baker" />}
            label="Baker"
          />
          <FormControlLabel
            control={<Checkbox checked={Cook} onChange={handleChange} name="Cook" />}
            label="Cook/Kitchen Prep"
          />
          <FormControlLabel
            control={<Checkbox checked={Cashier} onChange={handleChange} name="Cashier" />}
            label="Cashier"
          />
          <FormControlLabel
            control={<Checkbox checked={Barista} onChange={handleChange} name="Barista" />}
            label="Barista"
          />
           <FormControlLabel
            control={<Checkbox checked={Driver} onChange={handleChange} name="Driver" />}
            label="Driver"
          />
         
        </FormGroup>
        <FormHelperText>(You can choose more than one)</FormHelperText>
      </FormControl>
     
    </div>
  );
}

export default Position;