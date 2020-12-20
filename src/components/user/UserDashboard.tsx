import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { EventDetailsLayout } from "customTypes"

const useStyles = makeStyles((theme) => ({
  welcomeBox: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "flex-start",
    marginTop: "32px",
    marginBottom: "32px",
    padding: "32px",
    minHeight: "256px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  dashboardTitleContainer: {
    marginBottom: "32px",
  },
  dashboardTitleText: {
    fontSize: '28px',
    fontFamily: "Arial",
    color: "black",
  },
  table: {
    minWidth: 400,
  },
}));

export default function UserDashboard() {
  const classes = useStyles();
  const [currentEvents, setCurrentEvents] = useState<Array<EventDetailsLayout> | null>(null)

  const fetchEvents = async () => {
    const res = await fetch('http://localhost:8002/all', {
          method: 'GET',
          credentials: 'include',
      })
      .then(response => response.json())
      .then(response => {
        setCurrentEvents(response)
        console.log(response)
      })
  }

  useEffect(() => {
      fetchEvents()
  }, [])

  return (
    <Grid container className={classes.welcomeBox}>

      <div className={classes.dashboardTitleContainer}>
        <span className={classes.dashboardTitleText}>Your Events</span>
      </div>

      {
        currentEvents?
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentEvents.map((row) => (
                <TableRow key={0}>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>:
        null
      }



    </Grid>
  );
}
