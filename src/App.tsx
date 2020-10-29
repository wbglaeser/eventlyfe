import React from 'react'
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Routes from "routing/Routes"
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

        <Routes />

      </Router>
    </div>
  );
};

export default App;
