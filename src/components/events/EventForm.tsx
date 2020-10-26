import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
var path = require('path');
import { retrieveEventDetailById } from "data/Interface"

const useStyles = makeStyles((theme) => ({
  welcomeBoxInfoText: {
    fontSize: "28px",
    fontFamily: "Arial Black",
    color: "black",
  },
  linkStyle: {
    textDecoration: 'none'
  },
  startButton: {
    backgroundColor: "white",
    padding: "2vh",
    margin: "10vh",
    fontSize: "28px",
    fontFamily: "Arial Black",
    color: "black",
  }
}));

type EventFormProps = {
  step: string
}

let initialState: string = ""

export default function EventForm(props: EventFormProps) {
  const classes = useStyles();
  const stepDetails = retrieveEventDetailById(props.step)

  return (
    <>
      <div className={classes.welcomeBoxInfoText}>
            {stepDetails.question}
      </div>
        <TextField
          key={props.step}
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder={stepDetails.placeholder}
          fullWidth
          margin="normal"
          defaultValue=""
        />

      <Link to={"/event/" + stepDetails.nextStep }className={classes.linkStyle}>
        <div className={classes.startButton}>
          Next
        </div>
      </Link>

    </>
  );
}
