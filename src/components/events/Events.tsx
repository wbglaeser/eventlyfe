import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  welcomeBox: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "flex-start",
    height: "50vh",
    marginTop: "3vh"
  },
  welcomeBoxStart: {
    height: "100%",
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
  }
}));

export default function Events() {
  const classes = useStyles();

  return (
    <Grid container className={classes.welcomeBox}>

    <div className={classes.welcomeBoxStart}>

    <div className={classes.welcomeBoxInfoText}>

      <Link to={"/event/" + "name" }className={classes.linkStyle}>
        <div className={classes.startButton}>
          Enter your Event Details
        </div>
      </Link>

    </div>
    </div>
    </Grid>
  );
}
