import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { RegisterDataLayout } from "customTypes"
import { Redirect } from 'react-router-dom';
import { Authentification } from "states/authentification"

const useStyles = makeStyles((theme) => ({
  registerTitleContainer:{
    margin: "32px"
  },
  registerTitleText: {
    fontSize: '28px',
    fontFamily: "Arial"
  },
}));

type RegisterResultProps = {
  registerData: RegisterDataLayout
}

export default function RegisterResultPage(props: RegisterResultProps) {
  const classes = useStyles();
  let authentification = Authentification.useContainer();

  const [registerResult, setRegisterResult] = useState(false)

  const registerUser = async (registerData: RegisterDataLayout) =>{
    const res = await fetch('http://localhost:8001/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(registerData)
    }).then(response => response.json())
    .then(response => {
      setRegisterResult(response)
      authentification.login()
    })
  }


  useEffect(() => {
      registerUser(props.registerData)
  }, [])

  return (
    <div>
      {
        registerResult?
        <Redirect to={"/event/overview"}/>:
        <div className={classes.registerTitleContainer}>
          <span className={classes.registerTitleText}>
            Your register was not successful
          </span>
        </div>
      }
    </div>
  );
}
