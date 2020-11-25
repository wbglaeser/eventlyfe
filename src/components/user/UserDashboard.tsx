import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  welcomeBox: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    height: "100%",
    width: "100%",
    padding: "100px"
  },
  eventBoxContainer: {
    width: "40vw",
    minHeight: "30",
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
  eventText:{
    fontSize: '22px',
    fontFamily: "Arial",
    marginBottom: "50px"
  },
  startButton: {
    width: "20vw",
    minHeight: "5vh",
    backgroundColor: "#4aa0ec",
    fontSize: '28px',
    fontFamily: "Arial",
    color: "white",
    textDecoration: 'none',
    padding: "15px",
    marginRight: "30px",
    borderRadius: "5px",
  }
}));

export default function UserDashboard() {
  const classes = useStyles();

  return (
    <Grid container className={classes.welcomeBox}>
      <div className={classes.eventBoxContainer}>
        <div className={classes.eventContent}>
          <div className={classes.eventText}>
            Your events:
          </div>
        </div>
      </div>

    </Grid>
  );
}
