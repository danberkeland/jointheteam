import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

export default function AboutYou({ setIntroduction }) {
  const classes = useStyles();



  return (
    <form className={classes.root} noValidate autoComplete="off">
      
        <TextField
          id="outlined-multiline-static"
          label="Introduction"
          multiline
          rows={4}
          placeholder="Tell us about yourself ..."
          variant="outlined"
          onChange = {e => setIntroduction(e.target.value)}

        />
      
    </form>
  );
}

