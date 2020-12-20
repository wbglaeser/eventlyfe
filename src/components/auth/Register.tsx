import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { RegisterDataLayout } from "customTypes"
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
  registerFormTitleText: {
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

let initialRegisterState: String = "input";

export default function Register() {
  const classes = useStyles();
  const [nameInput, setNameInput] = useState(null)
  const [emailInput, setEmailInput] = useState(null)
  const [passwordInput, setPasswordInput] = useState(null)

  const updateNameInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setNameInput(event.currentTarget.value)
  }
  const updateEmailInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setEmailInput(event.currentTarget.value)
  }
  const updatePasswordInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setPasswordInput(event.currentTarget.value)
  }

  const handleSubmit = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    let registerData = {
      name: nameInput,
      email: emailInput,
      password: passwordInput
    };
    registerUser(registerData)
  }

  const registerUser = async (registerData: RegisterDataLayout) => {
    const res = await fetch('http://localhost:8001/register', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify(registerData)
      })
      .then(response => response.json())
      .then(response => {
        console.log("hi there")
        history.push("/user/dashboard")
      })
  }

  return (
    <Grid container className={classes.welcomeBox}>

      <div>
        <span className={classes.registerFormTitleText}>Enter your register details</span>
      </div>

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div className={classes.formBox}>
          <TextField id="standard-basic0" label="name" name="name" onChange={updateNameInput}/>
          <TextField id="standard-basic1" label="email" name="email" onChange={updateEmailInput}/>
          <TextField id="standard-basic2" label="password" name="password" onChange={updatePasswordInput}/>
        </div>
        <button type="submit">Register</button>
      </form>

    </Grid>

  );
}
