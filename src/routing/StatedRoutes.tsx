import React from 'react'
import ReactDOM from "react-dom"
import { Route } from "react-router-dom"
import LandingPage from "components/main/LandingPage"
import About from "components/main/About"
import Contact from "components/main/Contact"
import Events from "components/events/Events"
import EventConfirmation from "components/events/EventConfirmation"
import EventQuestion from "components/events/EventQuestion"
import Login from "components/auth/Login"
import Register from "components/auth/Register"

const StatedRoutes = () => {

  return (
    <>
        <Route exact path="/event">
            <Events />
        </Route>

        <Route exact path="/login">
            <Login />
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

    </>
  );
};

export default StatedRoutes;
