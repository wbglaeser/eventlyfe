import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, useParams, Redirect } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { LoginDataLayout } from "customTypes"
import history from 'routing/RouteHistory';

const useStyles = makeStyles((theme) => ({
  welcomeBox: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "flex-start",
    marginTop: "32px",
    marginBottom: "32px",
    padding: "32px",
    minHeight: "256px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  loginFormTitleText: {
    fontSize: '28px',
    fontFamily: "Arial",
    color: "black",
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "32px",
    marginTop: "32px"
  }
}));

export default function Login() {
  const classes = useStyles();
  const [emailInput, setEmailInput] = useState<string | null>(null)
  const [passwordInput, setPasswordInput] = useState<string | null>(null)

  const updateEmailInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setEmailInput(event.currentTarget.value)
  }
  const updatePasswordInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setPasswordInput(event.currentTarget.value)
  }

  const handleSubmit = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    let loginData = {
      email: emailInput,
      password: passwordInput
    };
    validateUser(loginData)
  }

  const validateUser = async (loginData: LoginDataLayout) => {
    const res = await fetch('http://localhost:8001/login', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify(loginData)
      })
      .then(response => response.json())
      .then(response => {
        console.log("hi there")
        history.push("/event/input")
      })
  }

  return (
    <Grid container className={classes.welcomeBox}>

      <div>
        <span className={classes.loginFormTitleText}>Enter your login details</span>
      </div>

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div className={classes.formBox}>
          <TextField id="standard-basic" label="email" name="email" onChange={updateEmailInput}/>
          <TextField id="standard-basic2" label="password" name="password" onChange={updatePasswordInput}/>
        </div>
        <button type="submit">Login</button>
      </form>

    </Grid>
  );
}
