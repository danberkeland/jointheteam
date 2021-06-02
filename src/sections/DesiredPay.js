import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '5ch',
  },
}));

export default function DesiredPay({ desired, setDesired }) {
  const classes = useStyles();
  

  
  

  return (
    <div className={classes.root}>
      <div>

      

    
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Desired Pay</InputLabel>
          <Input
            id="outlined-adornment-amount"
            value={desired}
            onChange = {e => setDesired(e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            endAdornment={<InputAdornment position="end">/hr.</InputAdornment>}
            
          />
        </FormControl>
      </div>
    </div>
  );
}
