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
    flexDirection: 'column',
    justifyContent: "space-between",
    marginTop: "32px",
    minHeight: "640px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  eventOverviewTitleContainer: {
    margin: "32px 32px 0px 32px"
  },
  eventOverviewTitleText: {
    fontSize: '28px',
    fontFamily: "Arial",
    color: "black",
  },
  eventOverviewInfoContainer: {
    margin: "32px"
  },
  eventOverviewInfoText: {
    fontSize: '22px',
    fontFamily: "Arial",
    color: "black",
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
  createButtonContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    textDecoration: 'none',
    margin: "0px 32px 32px 32px",
    padding: "16px"
  },
  createButtonText: {
    fontSize: '28px',
    fontFamily: "Arial",
    color: "white"
  },
  loginContainer:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    fontFamily: "Arial"
  },
  eventOverviewButtonContainer: {
    margin: "32px 32px 0px 32px"
  },
  eventOverviewListContainer: {
    margin: "0px 32px 0px 32px"
  },
}));

export default function EventOverview() {
  const classes = useStyles();
  let eventDetails = EventDetails.useContainer();
  let authentification = Authentification.useContainer();
  console.log(eventDetails.self)

  return (
    <Grid container className={classes.welcomeBox}>

        <div className={classes.eventOverviewTitleContainer}>
          <span className={classes.eventOverviewTitleText}>
            Your overview
          </span>
        </div>

        <div className={classes.eventOverviewInfoContainer}>
          <span className={classes.eventOverviewInfoText}>
            Your Event Details:
          </span>
        </div>


          {Object.entries(eventDetails.self).map((label, index) => {
            return(
              <div className={classes.eventOverviewListContainer}>
                <span key={index}>{label[0]}: {label[1]}</span>
              </div>
            )
          })}
        {
          authentification.logged_in()?
          <>
            <Link className={classes.createButtonContainer} to={"/confirmation"} >
                <span className={classes.createButtonText}>Create Event</span>
            </Link>
          </>
          :
          <>
          <div className={classes.eventOverviewButtonContainer}>
            <span className={classes.eventOverviewInfoText}>
              To create the event you need to sign in first
            </span>
          </div>

          <Link
            to={"/login/event"}
            className={classes.createButtonContainer}
          >
            <span className={classes.createButtonText}>
              Login
            </span>
          </Link>

          <div className={classes.eventOverviewButtonContainer}>
            <span className={classes.eventOverviewInfoText}>
              Don't have an account yet?
            </span>
          </div>

          <Link
            to={"/register"}
            className={classes.createButtonContainer}
            >
            <span className={classes.createButtonText}>
              Register
            </span>
          </Link>
          </>
        }
    </Grid>
  );
}
