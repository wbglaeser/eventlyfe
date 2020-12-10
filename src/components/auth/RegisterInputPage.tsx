import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { RegisterDataLayout } from "customTypes"

const useStyles = makeStyles((theme) => ({
  registerTitleContainer:{
    margin: "32px"
  },
  registerTitleText: {
    fontSize: '28px',
    fontFamily: "Arial"
  },
  registerInputContainer: {
    margin: "32px"
  },
  registerButtonContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    textDecoration: 'none',
    margin: "0px 32px 32px 32px",
    padding: "16px",
    border: "solid 0px"
  },
  registerButtonText: {
    fontSize: '28px',
    fontFamily: "Arial",
    color: "white"
  }
}));

type RegisterResultProps = {
  updateRegisterData: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  updateRegisterState: () => void;
}

export default function RegisterInputPage(props: RegisterResultProps) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.registerTitleContainer}>
        <span className={classes.registerTitleText}>
          Enter your registration data
        </span>
      </div>

      <div className={classes.registerInputContainer}>
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
      </div>

      <div className={classes.registerInputContainer}>
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
      </div>

      <div className={classes.registerButtonContainer}
        onClick={() => { props.updateRegisterState()} }>
        <span className={classes.registerButtonText}>Register</span>
      </div>

    </div>
  );
}
