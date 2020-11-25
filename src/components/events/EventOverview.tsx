import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"
import { EventDetailsLayout } from "customTypes"
import Grid from '@material-ui/core/Grid';
import { EventDetails } from "states/eventDetails"
import { Authentification } from "states/authentification"

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
    padding: "50px",
    width: "100%"
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
    marginBottom: "10px"
  },
  loginContainer:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    fontFamily: "Arial"
  },
}));

export default function EventOverview() {
  const classes = useStyles();
  let eventDetails = EventDetails.useContainer();
  let authentification = Authentification.useContainer();
  console.log(eventDetails.self)

  return (
    <Grid container className={classes.welcomeBox}>

      <div className={classes.eventBoxContainer}>
        <div className={classes.eventContent}>

        <div className={classes.eventTitle}>
          Your overview
        </div>

        <div className={classes.eventText}>
          Your Event Details:
          {Object.entries(eventDetails.self).map((label, index) => {
            return(
              <div key={index}>{label[0]}: {label[1]}</div>
            )
          })}
        </div>

        {
          authentification.logged_in()?
          <Link
            className={classes.startButton}
            to={"/confirmation"}
          >
              Create Event
          </Link>
          :
          <div className={classes.loginContainer}>
            To create the event you need to sign in first
            <Link
              to={"/login/event"}
              className={classes.startButton}
              >
                Login
            </Link>
              Don't have an account yet?
            <Link
              to={"/register"}
              className={classes.startButton}
              >
                Register
            </Link>
          </div>
        }

        </div>
      </div>

    </Grid>
  );
}
