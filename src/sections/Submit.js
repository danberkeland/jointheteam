import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { API, graphqlOperation } from "aws-amplify";
import { createTodo } from "../graphql/mutations";

import swal from "@sweetalert/with-react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons({
  firstName,
  lastName,
  phone,
  email,
  seeking,
  where,
  position,
  kitchenExp,
  bakeryExp,
  current,
  desired,
  introduction,
}) {
  const classes = useStyles();

  const handleClick = async () => {
    const addDetails = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      seeking: seeking,
      where: where,
      position: position,
      kitchenExp: kitchenExp,
      bakeryExp: bakeryExp,
      current: current,
      desired: desired,
      introduction: introduction,
    };

    try {
      await API.graphql(
        graphqlOperation(createTodo, { input: { ...addDetails } })
      );
    } catch (error) {
      console.log("error on creating Applicant", error);
    }

    swal(
      <div>
        <h1>Nice to Meet You!</h1>
        <p>Thank you for your application.</p>
        <p>If you've got a resume you'd like to send us, please email it to:</p>
        <p>backporchbakeryslo@gmail.com</p>
        <p>we'll look over your application and get back to you shortly.</p>
      </div>,
      {
        icon: "success",
        button: "Return to Homepage",
      }
    ).then(function () {
      window.location = "http://www.backporchbakery.com";
    });
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Submit
      </Button>
    </div>
  );
}
