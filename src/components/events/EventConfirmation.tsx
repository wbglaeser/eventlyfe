import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { EventDetailsLayout } from "customTypes"

import { EventDetails } from "states/eventDetails"

const useStyles = makeStyles((theme) => ({
  welcomeBox: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "flex-start",
    marginTop: "32px",
    minHeight: "256px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  eventConfirmationTitleContainer: {
    margin: "32px"
  },
  eventConfirmationTitleText: {
    fontSize: '22px',
    fontFamily: "Arial",
    color: "black",
  }
}));

export default function EventConfirmation() {
  const classes = useStyles();
  const [createResult, setCreateResult] = useState(false)
  let eventDetails = EventDetails.useContainer();

  const createEvent = async (eventDetails: EventDetailsLayout) => {
    const res = await fetch('http://localhost:8001/events/', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      credentials: 'include',
      body: JSON.stringify(eventDetails)
    }).then((response) => response.json())
    .then(response => {
      setCreateResult(response)
    })
  }

  useEffect(() => {
      createEvent(eventDetails.self)
  }, [])

  return (
    <Grid container className={classes.welcomeBox}>
        {
          createResult?
          <div className={classes.eventConfirmationTitleContainer}>
            <span className={classes.eventConfirmationTitleText}>Your Event has been created successfully</span>
          </div>
          :
          <div className={classes.eventConfirmationTitleContainer}>
            <span className={classes.eventConfirmationTitleText}>Your Event could not be created</span>
          </div>
        }
    </Grid>
  );
}
