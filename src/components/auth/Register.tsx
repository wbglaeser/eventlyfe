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
    alignItems: "flex-start",
    height: "50vh",
    marginTop: "3vh"
  },
  welcomeBoxStart: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  welcomeBoxInfoText: {
    color: "white",
  },
  linkStyle: {
    textDecoration: 'none'
  },
  startButton: {
    backgroundColor: "white",
    padding: "2vh",
    margin: "10vh",
    fontSize: "28px",
    fontFamily: "Arial Black",
    color: "black",
  },
  eventExplanation: {
    fontSize: "22px",
    fontFamily: "Arial Black",
    color: "black",
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

    <div className={classes.welcomeBoxStart}>

    <div className={classes.welcomeBoxInfoText}>

      {
        registerState === "input" ?
        <RegisterInputPage updateRegisterData={updateRegisterData} updateRegisterState={updateRegisterState} /> :
        <RegisterResultPage registerData={registerData} />
      }

    </div>
    </div>
    </Grid>
  );
}
