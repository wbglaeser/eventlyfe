import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { RegisterDataLayout } from "customTypes"
import { Redirect } from 'react-router-dom';
import { Authentification } from "states/authentification"

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

type RegisterResultProps = {
  registerData: RegisterDataLayout
}

export default function RegisterResultPage(props: RegisterResultProps) {
  const classes = useStyles();
  let authentification = Authentification.useContainer();

  const [registerResult, setRegisterResult] = useState(false)

  const registerUser = async (registerData: RegisterDataLayout) =>{
    const res = await fetch('http://localhost:8001/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(registerData)
    }).then(response => response.json())
    .then(response => {
      setRegisterResult(response)
      authentification.login()
    })
  }


  useEffect(() => {
      registerUser(props.registerData)
  }, [])

  return (
    <Grid container className={classes.welcomeBox}>

      <div className={classes.welcomeBoxStart}>
        <div className={classes.welcomeBoxInfoText}>
        {
          registerResult?
          <Redirect to={"/event/overview"}/>:
          <div className={classes.eventExplanation}>
            Your register was not successful.
          </div>
        }
        </div>
      </div>
    </Grid>
  );
}
