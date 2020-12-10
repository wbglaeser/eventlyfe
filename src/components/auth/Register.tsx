import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RegisterInputPage from "components/auth/RegisterInputPage"
import RegisterResultPage from "components/auth/RegisterResultPage"
import { RegisterDataLayout } from "customTypes"

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

let initialRegisterData: RegisterDataLayout = {};
let initialRegisterState: String = "input";

export default function Register() {
  const [registerData, setRegisterData] = useState(initialRegisterData)
  const [registerState, setRegisterState] = useState(initialRegisterState)
  const classes = useStyles();

  const updateRegisterData = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    let _registerData = {...registerData}
    _registerData[event.currentTarget.name] = event.currentTarget.value
    setRegisterData(_registerData)
  }

  const updateRegisterState = () => {
    setRegisterState("result")
  }

  return (
    <Grid container className={classes.welcomeBox}>

          {
            registerState === "input" ?
            <RegisterInputPage updateRegisterData={updateRegisterData} updateRegisterState={updateRegisterState} /> :
            <RegisterResultPage registerData={registerData} />
          }

    </Grid>

  );
}
