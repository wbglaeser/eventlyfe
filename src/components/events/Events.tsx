import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  welcomeBox: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "flex-start",
    minHeight: "100vh",
    marginTop: "3vh"
  },
  welcomeBoxStart: {
    backgroundColor: "#1d57a5",
    height: "100%",
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
  }
}));

export default function Events() {
  const classes = useStyles();

  return (
    <Grid container className={classes.welcomeBox}>

    <div className={classes.welcomeBoxStart}>

      <div className={classes.welcomeBoxInfoText}>
            Setup Your Event
      </div>

    </div>
    </Grid>
  );
}
