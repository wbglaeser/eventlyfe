import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, useParams, useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
var path = require('path');
import { retrieveEventDetailById } from "data/Interface"
import FormControl from '@material-ui/core/FormControl';
import { EventDetailsLayout } from "customTypes"
import history from 'routing/RouteHistory';

import { EventDetails } from "states/eventDetails"

const useStyles = makeStyles((theme) => ({
  welcomeBox: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "flex-start",
    marginTop: "32px",
    marginBottom: "32px",
    padding: "32px",
    minHeight: "256px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  eventFormTitleContainer: {
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
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "32px",
    marginTop: "32px"
  }
}));

let initialTextInput: string = ""

export default function EventForm() {
  const classes = useStyles();
  const [eventName, setEventName] = useState<string | null>(null)
  const [eventLocation, setEventLocation] = useState<string | null>(null)
  const [eventDate, setEventDate] = useState<string | null>(null)

  const updateEventName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setEventName(event.currentTarget.value)
  }
  const updateEventLocation = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setEventLocation(event.currentTarget.value)
  }
  const updateEventDate = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setEventDate(event.currentTarget.value)
  }

  const handleSubmit = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    let eventData = {
      name: eventName,
      date: eventDate,
      location: eventLocation,
    };
    registerEvent(eventData)
  }

  const registerEvent = async (registerData: EventDetailsLayout) => {
    const res = await fetch('http://localhost:8002/', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify(registerData)
      })
      .then(response => response.json())
      .then(response => {
        console.log("hi there")
        history.push("/dashboard")
      })
  }

  return (
    <Grid container className={classes.welcomeBox}>

      <div className={classes.eventFormTitleContainer}>
        <span className={classes.eventFormTitleText}>Enter the details of your event</span>
      </div>

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div className={classes.formBox}>
          <TextField id="standard-basic" label="Name" onChange={updateEventName}/>
          <TextField id="standard-basic2" label="Location" onChange={updateEventLocation} />
          <TextField id="standard-basic3" label="Date" onChange={updateEventDate} />
        </div>
        <button type="submit">Create your Event</button>
      </form>

    </Grid>

  );
}
