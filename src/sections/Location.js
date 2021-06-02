
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

function Location({ where, setWhere }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setWhere({ ...where, [event.target.name]: event.target.checked });
  };

  const { SanLuisObispo, Atascadero } = where;
  

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Where do you want to work?</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={SanLuisObispo} onChange={handleChange} name="SanLuisObispo" />}
            label="San Luis Obispo"
          />
          <FormControlLabel
            control={<Checkbox checked={Atascadero} onChange={handleChange} name="Atascadero" />}
            label="Atascadero"
          />
        </FormGroup>
        <FormHelperText>(You can choose both)</FormHelperText>
      </FormControl>
     
    </div>
  );
}

export default Location;