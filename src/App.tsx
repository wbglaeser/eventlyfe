import React from 'react'
import ReactDOM from "react-dom"
import { makeStyles } from '@material-ui/core/styles'
import EventStateInit from "states/EventStateInit"

const useStyles = makeStyles((theme) => ({
  root: {
    height:"100%",
    minHeight: "105vh",
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    paddingBottom: "5vh"
  },
  navBar: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    width: "100vw",
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <EventStateInit />
    </div>
  );
};

export default App;
