import React, { useState, useEffect } from 'react';
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
  loginData: LoginDataLayout
}

export default function LoginResultPage(props: LoginResultProps) {
  const classes = useStyles();
  const [loginResult, setLoginResult] = useState(false)

  const validateUser = async (loginData: LoginDataLayout) =>{
    const res = await fetch('http://localhost:8001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(loginData)
    }).then(response => response.json())
    .then(response => setLoginResult(response))
  }

  useEffect(() => {
      validateUser(props.loginData)
  })

  return (
    <Grid container className={classes.welcomeBox}>

      <div className={classes.welcomeBoxStart}>
        <div className={classes.welcomeBoxInfoText}>
          {
            loginResult ?
              <div className={classes.eventExplanation}>
                You have been logged in successfully
              </div>
              :
              <div className={classes.eventExplanation}>
                Your login was not successful.
              </div>
          }

        </div>
      </div>
    </Grid>
  );
}
