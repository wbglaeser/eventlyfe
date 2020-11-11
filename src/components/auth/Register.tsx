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
    flexDirection: 'row',
    justifyContent: "center",
    minHeight: "100%",
    width: "100%",
    padding: "100px"
  },
  eventBoxContainer: {
    width: "40vw",
    minHeight: "30vh",
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

      <div className={classes.eventBoxContainer}>
        <div className={classes.eventContent}>

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
