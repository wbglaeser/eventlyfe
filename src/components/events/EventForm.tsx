import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, useParams, useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
var path = require('path');
import { retrieveEventDetailById } from "data/Interface"

import { EventDetails } from "states/eventDetails"

const useStyles = makeStyles((theme) => ({
  welcomeBox: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-between",
    marginTop: "32px",
    minHeight: "640px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  eventFormTitleContainer: {
    margin: "32px"
  },
  eventFormTitleText: {
    fontSize: '28px',
    fontFamily: "Arial",
    color: "black",
  },
  textInputContainer: {
    margin: "32px"
  },
  nextButtonContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    textDecoration: 'none',
    margin: "32px",
    padding: "16px"
  },
  nextButtonText: {
    fontSize: '28px',
    fontFamily: "Arial",
    color: "white"
  }
}));

type EventFormProps = {
  step: string
}

let initialTextInput: string = ""

export default function EventForm(props: EventFormProps) {
  const [textInput, setTextInput] = useState(initialTextInput)
  const classes = useStyles();
  const stepDetails = retrieveEventDetailById(props.step)
  let eventDetails = EventDetails.useContainer();

  const updateTextInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setTextInput(event.currentTarget.value)
  }

  return (
    <Grid container className={classes.welcomeBox}>

        <div className={classes.eventFormTitleContainer}>
          <span className={classes.eventFormTitleText}>{stepDetails.question}</span>
        </div>

        <div className={classes.textInputContainer}>
          <TextField
            key={props.step}
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder={stepDetails.placeholder}
            fullWidth
            margin="normal"
            onChange={updateTextInput}
          />
        </div>

        <Link
          to={"/event/" + stepDetails.nextStep}
          className={classes.nextButtonContainer}
          onClick={() => {eventDetails.addDetail(props.step, textInput)}}
        >
        <span className={classes.nextButtonText}>
          Next
        </span>
      </Link>

    </Grid>

  );
}
