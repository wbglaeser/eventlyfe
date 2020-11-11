import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { LoginDataLayout } from "customTypes"

const useStyles = makeStyles((theme) => ({
  eventTitle:{
    fontSize: '28px',
    fontFamily: "Arial",
    marginBottom: "25px"
  },
  startButton: {
    minHeight: "3vh",
    backgroundColor: "#4aa0ec",
    fontSize: '22px',
    fontFamily: "Arial",
    color: "white",
    textDecoration: 'none',
    padding: "10px",
    marginRight: "30px",
    borderRadius: "5px",
  }
}));

type LoginResultProps = {
  updateLoginData: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  updateLoginState: () => void;
}

export default function LoginPage(props: LoginResultProps) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.eventTitle}>
        Enter your login data
      </div>

      <TextField
        key={1}
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder={"Username"}
        fullWidth
        margin="normal"
        name="name"
        onChange={props.updateLoginData}
      />

      <TextField
        key={2}
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder={"Password"}
        fullWidth
        name="password"
        margin="normal"
        onChange={props.updateLoginData}
      />

      <div className={classes.startButton}
      onClick={() => { props.updateLoginState()} }>
        Login
      </div>
    </>
  );
}
