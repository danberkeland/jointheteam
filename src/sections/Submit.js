import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import swal from '@sweetalert/with-react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const handleClick = () => {
  swal(<div>
    <h1>Nice to Meet You!</h1>        
    <p>Thank you for your application.</p>
    <p>If you've got a resume you'd like to send us, please email it to:</p>
    <p>backporchbakeryslo@gmail.com</p>
    <p>we'll look over your application and get back to you shortly.</p>
  </div>, {
    icon: "success",
    button: "Return to Homepage",
  }).then(function() {
    window.location = "http://www.backporchbakery.com"; 
  });
  
}

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Button variant="contained" color="primary" onClick={handleClick}>
        Submit
      </Button>
      
    </div>
  );
}
