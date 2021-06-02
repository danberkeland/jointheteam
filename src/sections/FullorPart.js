import React from 'react';
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

function FullorPart({ seeking, setSeeking }) {
  const classes = useStyles();
  

  const handleChange = (event) => {
    setSeeking({ ...seeking, [event.target.name]: event.target.checked });
  };

  const { FullTime, PartTime } = seeking

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Seeking?</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={FullTime} onChange={handleChange} name="FullTime" />}
            label="Full Time"
          />
          <FormControlLabel
            control={<Checkbox checked={PartTime} onChange={handleChange} name="PartTime" />}
            label="Part Time"
          />
        </FormGroup>
        <FormHelperText>(You can choose both)</FormHelperText>
      </FormControl>
     
    </div>
  );
}

export default FullorPart;