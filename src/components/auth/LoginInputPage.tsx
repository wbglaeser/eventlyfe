import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { LoginDataLayout } from "customTypes"

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
  },
  eventExplanation: {
    fontSize: "22px",
    fontFamily: "Arial Black",
    color: "black",
  }
}));

type LoginResultProps = {
  updateLoginData: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  updateLoginState: () => void;
}

export default function LoginPage(props: LoginResultProps) {
  const classes = useStyles();

  return (
    <Grid container className={classes.welcomeBox}>

    <div className={classes.welcomeBoxStart}>

    <div className={classes.welcomeBoxInfoText}>

      <div className={classes.eventExplanation}>
        Enter your login data
      </div>

      <TextField
        key={1}
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder={"Username"}
        fullWidth
        margin="normal"
        name="name"
        onChange={props.updateLoginData}
      />

      <TextField
        key={2}
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder={"Password"}
        fullWidth
        name="password"
        margin="normal"
        onChange={props.updateLoginData}
      />

      <div className={classes.startButton}
      onClick={() => { props.updateLoginState()} }>
        Login
      </div>

    </div>
    </div>
    </Grid>
  );
}
