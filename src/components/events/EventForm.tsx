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
    flexDirection: 'row',
    justifyContent: "center",
    height: "100%",
    width: "100%",
    padding: "100px"
  },
  eventBoxContainer: {
    width: "40vw",
    minHeight: "30",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  eventContent:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "50px"
  },
  eventTitle:{
    fontSize: '28px',
    fontFamily: "Arial",
    marginBottom: "25px"
  },
  eventText:{
    fontSize: '22px',
    fontFamily: "Arial",
    marginBottom: "50px"
  },
  textInput: {
    marginBottom: "25px"
  },
  nextButtonContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  startButton: {
    minHeight: "3vh",
    backgroundColor: "#4aa0ec",
    fontSize: '22px',
    fontFamily: "Arial",
    color: "white",
    textDecoration: 'none',
    padding: "10px",
    marginRight: "30px",
    borderRadius: "5px",
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

      <div className={classes.eventBoxContainer}>
        <div className={classes.eventContent}>

        <div className={classes.eventTitle}>
          {stepDetails.question}
        </div>

        <div className={classes.eventText}>
          Over the next few steps you can setup your own event by answering a few
          simple questions
        </div>
        <div className={classes.textInput}>
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
        <div className={classes.nextButtonContainer}>
          <Link
            to={"/event/" + stepDetails.nextStep }
            className={classes.startButton}
            onClick={() => {eventDetails.addDetail(props.step, textInput)}}
          >
              Next
          </Link>
        </div>
        </div>
      </div>

    </Grid>

  );
}
