import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  welcomeBox: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "flex-start",
    height: "100%"
  },
  welcomeTextEvent: {
    fontSize: '150px',
    fontFamily: "Arial Black",
    color: "black",
    lineHeight: "155px"
  },
  welcomeTextLy: {
    fontSize: '150px',
    fontFamily: "Arial Black",
    color: "purple",
    lineHeight: "155px",
    marginBottom: "3vh"
  },
  welcomeBoxStart: {
    minHeight: "50vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  welcomeBoxInfoText: {
    color: "white",
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
  },
  eventlyHeadline: {
    width: "100%",
    borderBottom: "1px solid black"
  }
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.welcomeBox}>

      <div className={classes.eventlyHeadline}>
        <div className={classes.welcomeTextEvent}>Event</div>
        <div className={classes.welcomeTextLy}>Ly</div>
      </div>

      <div className={classes.welcomeBoxStart}>

        <div className={classes.welcomeBoxInfoText}>
          <Link to="/event" className={classes.linkStyle}>
            <div className={classes.startButton}>
              Setup Your Event
            </div>
          </Link>
        </div>

      </div>
    </Grid>
  );
}
