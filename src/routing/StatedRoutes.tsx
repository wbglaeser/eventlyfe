import React from 'react'
import ReactDOM from "react-dom"
import { Route } from "react-router-dom"
import LandingPage from "components/main/LandingPage"
import About from "components/main/About"
import Contact from "components/main/Contact"
import Events from "components/events/Events"
import EventConfirmation from "components/events/EventConfirmation"
import EventQuestion from "components/events/EventQuestion"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  mainArea: {
    minHeight: "100vh",
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    width: "65vw",
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
}));

const StatedRoutes = () => {
  const classes = useStyles();

  return (
    <>
        <Route exact path="/">
          <div className={classes.mainArea}>
            <LandingPage />
          </div>
        </Route>

        <Route exact path="/about">
          <div className={classes.mainArea}>
            <About />
          </div>
        </Route>

        <Route exact path="/contact">
          <div className={classes.mainArea}>
            <Contact />
          </div>
        </Route>

        <Route exact path="/event">
          <div className={classes.mainArea}>
            <Events />
          </div>
        </Route>

        <Route exact path="/confirmation">
          <div className={classes.mainArea}>
            <EventConfirmation />
          </div>
        </Route>

        <Route path="/event/:step">
          <div className={classes.mainArea}>
            <EventQuestion />
          </div>
        </Route>

    </>
  );
};

export default StatedRoutes;
