import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
var path = require('path');
import { retrieveEventDetailById } from "data/Interface"

import { EventDetails } from "states/eventDetails"

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
          onChange={updateTextInput}
        />

      <Link
        to={"/event/" + stepDetails.nextStep }
        className={classes.linkStyle}
        onClick={() => {eventDetails.addDetail(props.step, textInput)}}
      >
        <div className={classes.startButton}>
          Next
        </div>
      </Link>

    </>
  );
}
