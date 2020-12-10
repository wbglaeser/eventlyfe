import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { LoginDataLayout } from "customTypes"
import { Redirect } from 'react-router-dom';
import { Authentification } from "states/authentification"

const useStyles = makeStyles((theme) => ({
  loginTitleContainer:{
    margin: "32px"
  },
  loginTitleText: {
    fontSize: '28px',
    fontFamily: "Arial"
  }
}));

type LoginResultProps = {
  loginData: LoginDataLayout,
  loginType: String
}

export default function LoginResultPage(props: LoginResultProps) {
  const classes = useStyles();
  const [loginResult, setLoginResult] = useState(false)
  let authentification = Authentification.useContainer();


  const validateUser = async (loginData: LoginDataLayout) => {
    const res = await fetch('http://localhost:8001/users/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(loginData)
    }).then(response => response.json())
    .then(response => {
      setLoginResult(response)
      authentification.login()
    })
  }

  useEffect(() => {
      validateUser(props.loginData)
  }, [])

  console.log(props.loginType)
  console.log(loginResult)

  return (
    <div>
      {
        loginResult?
        <>
        {
          props.loginType==="dashboard"?
          <Redirect to={"/user/dashboard"}/>:
          <Redirect to={"/event/overview"}/>
        }
        </>:
        <div className={classes.loginTitleContainer}>
          <span className={classes.loginTitleText}>
            Your login was not successful
          </span>
        </div>
      }
    </div>
  );
}
