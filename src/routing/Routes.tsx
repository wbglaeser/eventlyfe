import React from 'react'
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import LandingPage from "components/main/LandingPage"
import About from "components/main/About"
import Contact from "components/main/Contact"
import EventStateInit from "states/EventStateInit"
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

const Routes = () => {
  const classes = useStyles();

  return (
    <Switch>

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

      <EventStateInit />

    </Switch>
  );
};

export default Routes;