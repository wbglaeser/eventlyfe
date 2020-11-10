import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"
import { EventDetailsLayout } from "customTypes"

import { EventDetails } from "states/eventDetails"
import { Authentification } from "states/authentification"

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
  let authentification = Authentification.useContainer();
  console.log(eventDetails.self)
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

      {
        authentification.logged_in()?
        <Link
          to={"/confirmation"}
          className={classes.linkStyle}
        >
          <div className={classes.startButton} >
            Create Event
          </div>
        </Link>
        :
        <>
          <p>To create the event you need to sign in first</p>
          <Link
            to={"/login"}
            className={classes.linkStyle}
            >
            <div className={classes.startButton} >
              Login
              </div>
          </Link>
          <p>Don't have an account yet?</p>
          <Link
            to={"/register"}
            className={classes.linkStyle}
            >
            <div className={classes.startButton} >
              Register
              </div>
          </Link>
        </>
      }



    </>
  );
}
