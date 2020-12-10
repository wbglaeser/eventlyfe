import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { LoginDataLayout } from "customTypes"

const useStyles = makeStyles((theme) => ({
  loginTitleContainer:{
    margin: "32px"
  },
  loginTitleText: {
    fontSize: '28px',
    fontFamily: "Arial"
  },
  loginInputContainer: {
    margin: "32px"
  },
  loginButtonContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    textDecoration: 'none',
    margin: "0px 32px 32px 32px",
    padding: "16px",
    border: "solid 0px"
  },
  loginButtonText: {
    fontSize: '28px',
    fontFamily: "Arial",
    color: "white"
  }
}));

type LoginResultProps = {
  updateLoginData: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  updateLoginState: () => void;
}

export default function LoginPage(props: LoginResultProps) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.loginTitleContainer}>
        <span className={classes.loginTitleText}>
          Enter your login data
        </span>
      </div>

      <div className={classes.loginInputContainer}>
        <TextField
          key={1}
          id="standard-full-width"
          style={{ margin: 10 }}
          placeholder={"Username"}
          fullWidth
          margin="normal"
          name="name"
          onChange={props.updateLoginData}
        />
      </div>

      <div className={classes.loginInputContainer}>
        <TextField
          key={2}
          id="standard-full-width"
          style={{ margin: 10 }}
          placeholder={"Password"}
          fullWidth
          name="password"
          margin="normal"
          onChange={props.updateLoginData}
        />
      </div>

      <div className={classes.loginButtonContainer}
        onClick={() => { props.updateLoginState()} }>
        <span className={classes.loginButtonText}>Login</span>
      </div>
    </div>
  );
}
