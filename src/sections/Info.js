import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      display: 'flex',
      margin: '10px 10px 10px 10px',
      padding: '10px 10px 10px 10px',
      width: '30ch',
    },
  },
}));

export default function Info() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
        <TextField id="firstName" label="First Name" variant="outlined" />
      <TextField id="lastName" label="Last Name" variant="outlined" />
     
      <TextField id="phone" label="Phone" variant="outlined" />
      <TextField id="email" label="Email" variant="outlined" />
      
      
    </form>
  );
}
