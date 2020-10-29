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

const sendAsyncReq = (eventDetails: EventDetailsLayout) =>{
  return new Promise((resolve, reject) =>{
    fetch('http://localhost:8001/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(eventDetails)
    }).then(
      (response) => {
        response.json()
          .then((res) => {
            if (response.status === 201) { resolve(true) }
            else { resolve(false) }
          })
      })
      .catch((err) => {
        // reject(err)
      });
  })
}

const sendRequest = async (eventDetails: EventDetailsLayout) => {
  const result = await sendAsyncReq(eventDetails)
  console.log(result)
}

export default function EventConfirmation() {
  const classes = useStyles();
  let eventDetails = EventDetails.useContainer();
  let result = sendRequest(eventDetails.self)

  return (
    <>
      <div className={classes.welcomeBoxInfoText}>
        {
          result?
          <>Your Event has been created successfully</>:
          <>Your Event could not be created</>
        }

      </div>

    </>
  );
}
