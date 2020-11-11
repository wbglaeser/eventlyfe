import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { RegisterDataLayout } from "customTypes"

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

type RegisterResultProps = {
  updateRegisterData: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  updateRegisterState: () => void;
}

export default function RegisterInputPage(props: RegisterResultProps) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.eventTitle}>
        Enter your register data
      </div>

      <TextField
        key={1}
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder={"Username"}
        fullWidth
        margin="normal"
        name="name"
        onChange={props.updateRegisterData}
      />

      <TextField
        key={2}
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder={"Password"}
        fullWidth
        name="password"
        margin="normal"
        onChange={props.updateRegisterData}
      />

      <div className={classes.startButton}
      onClick={() => { props.updateRegisterState()} }>
        Register
      </div>
    </>
  );
}
