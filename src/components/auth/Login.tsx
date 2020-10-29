import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LoginInputPage from "components/auth/LoginInputPage"
import LoginResultPage from "components/auth/LoginResultPage"
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

let initialLoginData: LoginDataLayout = {};
let initialLoginState: String = "input";

export default function Login() {
  const [loginData, setLoginData] = useState(initialLoginData)
  const [loginState, setLoginState] = useState(initialLoginState)
  const classes = useStyles();

  const updateLoginData = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    let _loginData = {...loginData}
    _loginData[event.currentTarget.name] = event.currentTarget.value
    setLoginData(_loginData)
  }

  const updateLoginState = () => {
    setLoginState("result")
  }

  return (
    <Grid container className={classes.welcomeBox}>

    <div className={classes.welcomeBoxStart}>

    <div className={classes.welcomeBoxInfoText}>

      {
        loginState === "input" ?
        <LoginInputPage updateLoginData={updateLoginData} updateLoginState={updateLoginState} /> :
        <LoginResultPage loginData={loginData} />
      }

    </div>
    </div>
    </Grid>
  );
}
