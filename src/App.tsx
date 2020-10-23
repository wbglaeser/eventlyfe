import React from 'react'
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import LandingPage from "components/LandingPage"
import Events from "components/events/Events"
import EventQuestion from "components/events/EventQuestion"
import NavigationBar from "components/shared/NavigationBar"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height:"100%",
    minHeight: "105vh",
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    paddingBottom: "5vh"
  },
  mainArea: {
    minHeight: "100vh",
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    width: "65vw",
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
  navBar: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    width: "65vw",
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Router>
      <div className={classes.navBar}>
      <NavigationBar/>
      </div>

        <Switch>

          <Route exact path="/">
            <div className={classes.mainArea}>
              <LandingPage />
            </div>
          </Route>

          <Route exact path="/event">
            <div className={classes.mainArea}>
              <Events />
            </div>
          </Route>

          <Route path="/event/:step">
            <div className={classes.mainArea}>
              <EventQuestion />
            </div>
          </Route>


        </Switch>

      </Router>
    </div>
  );
};

export default App;
