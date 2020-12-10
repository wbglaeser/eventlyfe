import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, useParams } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LoginInputPage from "components/auth/LoginInputPage"
import LoginResultPage from "components/auth/LoginResultPage"
import { LoginDataLayout } from "customTypes"

const useStyles = makeStyles((theme) => ({
  welcomeBox: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "flex-start",
    marginTop: "32px",
    minHeight: "256px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  }
}));

let initialLoginData: LoginDataLayout = {};
let initialLoginState: String = "input";

export default function Login() {
  const [loginData, setLoginData] = useState(initialLoginData)
  const [loginState, setLoginState] = useState(initialLoginState)
  const classes = useStyles();
  let { type }: any = useParams()

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

          {
            loginState === "input" ?
            <LoginInputPage updateLoginData={updateLoginData} updateLoginState={updateLoginState} /> :
            <LoginResultPage loginData={loginData} loginType={type}/>
          }

    </Grid>
  );
}
