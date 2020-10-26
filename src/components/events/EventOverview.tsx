import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"

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

export default function EventOverview() {
  const classes = useStyles();
  let eventDetails = EventDetails.useContainer();

  console.log(Object.entries(eventDetails.self))

  return (
    <>
      <div className={classes.welcomeBoxInfoText}>
            Your Event Details:
            {Object.entries(eventDetails.self).map((label, index) => {
              return(
                <div key={index}>this:{label[0]}:{label[1]}</div>
              )
            })}
      </div>

      <Link
        to={"/event/create"}
        className={classes.linkStyle}
      >
        <div className={classes.startButton}>
          Create Event
        </div>
      </Link>

    </>
  );
}
