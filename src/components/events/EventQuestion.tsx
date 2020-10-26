import React, { useCallback, useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { Link, useParams, useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import EventForm from 'components/events/EventForm'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  welcomeBox: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    height: "50vh",
    marginTop: "10vh"
  },
  welcomeBoxStart: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  welcomeBoxInfoText: {
    fontSize: "28px",
    fontFamily: "Arial Black",
    color: "black",
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
  }
}));

export default function EventQuestion() {
  const classes = useStyles();
  let { step }: any = useParams()

  return (
    <Grid container className={classes.welcomeBox}>
      <div className={classes.welcomeBoxStart}>
        <EventForm step={step}/>
      </div>
    </Grid>
  );
}
