import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"
import { EventDetailsLayout } from "customTypes"

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
    <>
      <div className={classes.welcomeBoxInfoText}>
        {
          createResult?
          <>Your Event has been created successfully</>:
          <>Your Event could not be created</>
        }

      </div>

    </>
  );
}
