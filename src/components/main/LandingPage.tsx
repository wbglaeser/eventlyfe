import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
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
  landingHeaderContainer: {
    margin: "32px"
  },
  landingHeaderText: {
    fontSize: '28px',
    fontFamily: "Arial",
    color: "black",
  },
  createButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    textDecoration: 'none',
    margin: "32px",
    padding: "16px"
  },
  createButtonText: {
    fontSize: '28px',
    fontFamily: "Arial",
    color: "white"
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  let authentification = Authentification.useContainer();

  const checkSession = async () => {
    const res = await fetch('http://localhost:8001/users/validate_session', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      credentials: 'include',
      body: JSON.stringify({}),
    }).then((response) => response.json())
    .then(response => {
      authentification.login()
    })
  }

  useEffect(() => {
      checkSession()
  }, [])

  return (
    <Grid container className={classes.welcomeBox}>

        <div className={classes.landingHeaderContainer}>
          <span className={classes.landingHeaderText}>
            Evently allows you to create your own event with worrying about the nitty gritty
          </span>
        </div>

        <Link to="/event" className={classes.createButton}>
          <span className={classes.createButtonText}>Create your own Event</span>
        </Link>

    </Grid>
  );
}
