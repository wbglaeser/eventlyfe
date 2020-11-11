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
    flexDirection: 'row',
    justifyContent: "center",
    height: "100%",
    width: "100%",
    padding: "100px"
  },
  eventBoxContainer: {
    width: "40vw",
    height: "30vh",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  eventContent:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "50px"
  },
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

      <div className={classes.eventBoxContainer}>
        <div className={classes.eventContent}>

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
