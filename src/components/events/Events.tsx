import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { Cookies } from "states/cookies"

const useStyles = makeStyles((theme) => ({
  welcomeBox: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "flex-start",
    marginTop: "32px",
    minHeight: "256px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  eventHeaderContainer: {
    margin: "32px"
  },
  eventHeaderText: {
    fontSize: '28px',
    fontFamily: "Arial",
    color: "black",
  },
  startButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    textDecoration: 'none',
    margin: "32px",
    padding: "16px"
  },
  startButtonText: {
    fontSize: '28px',
    fontFamily: "Arial",
    color: "white"
  }
}));

export default function Events() {
  const classes = useStyles();
  let cookies = Cookies.useContainer();

  return (
    <Grid container className={classes.welcomeBox}>

        <div className={classes.eventHeaderContainer}>
          <span className={classes.eventHeaderText}>
            Over the next few steps you can setup your own event by answering a few simple questions
          </span>
        </div>

        <Link to={ "/event/input" }className={classes.startButton}>
          <span className={classes.startButtonText}>
            Enter your Event Details
          </span>
        </Link>

    </Grid>
  );
}
