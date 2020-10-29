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

let initialLoginState: LoginDataLayout = {};

export default function Events() {
  const [loginData, setLoginData] = useState(initialLoginState)
  const classes = useStyles();

  const updateLoginData = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    let _loginData = {...loginData}
    _loginData[event.currentTarget.name] = event.currentTarget.value
    setLoginData(_loginData)
    console.log(_loginData)
  }

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
        name="username"
        onChange={updateLoginData}
      />

      <TextField
        key={2}
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder={"Password"}
        fullWidth
        name="password"
        margin="normal"
        onChange={updateLoginData}
      />

      <Link
        to={ "/event" }
        className={classes.linkStyle}
      >
        <div className={classes.startButton}>
          Login
        </div>
      </Link>

    </div>
    </div>
    </Grid>
  );
}
