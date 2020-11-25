import React from 'react'
import ReactDOM from "react-dom"
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import LandingPage from "components/main/LandingPage"
import About from "components/main/About"
import Contact from "components/main/Contact"
import Events from "components/events/Events"
import EventConfirmation from "components/events/EventConfirmation"
import EventQuestion from "components/events/EventQuestion"
import Login from "components/auth/Login"
import Logout from "components/auth/Logout"
import Register from "components/auth/Register"
import NavigationBar from "components/shared/NavigationBar"
import UserDashboard from "components/user/UserDashboard"

const useStyles = makeStyles((theme) => ({
  navBar: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    width: "100vw",
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  }
}));


const StatedRoutes = () => {
  const classes = useStyles();

  return (
    <>
      <Router>

      <div className={classes.navBar}>
        <NavigationBar/>
      </div>

        <Switch>
          <Route exact path="/">
              <LandingPage />
          </Route>

          <Route exact path="/about">
              <About />
          </Route>

          <Route exact path="/contact">
              <Contact />
          </Route>

          <Route exact path="/event">
              <Events />
          </Route>

          <Route exact path="/login/:type">
              <Login />
          </Route>

          <Route exact path="/user/dashboard">
              <UserDashboard />
          </Route>

          <Route exact path="/logout">
              <Logout />
          </Route>

          <Route exact path="/register">
              <Register />
          </Route>

          <Route exact path="/confirmation">
              <EventConfirmation />
          </Route>

          <Route path="/event/:step">
              <EventQuestion />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default StatedRoutes;
