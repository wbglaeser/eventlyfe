import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#1d57a5",
    maxHeight: '20vh',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  logo: {
    width: 'auto',
    height: '18vh',
  },
  text: {
    color: "white",
    paddingRight: "2vw",
    fontFamily: "Arial"
  },
  linkStyle: {
    textDecoration: 'none'
  },
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>

        <Link to="/" className={classes.linkStyle}>
          <h3 className={classes.text}>Home</h3>
        </Link>
        <h3 className={classes.text}>About us</h3>
        <h3 className={classes.text}>Contact</h3>

      </Toolbar>
    </AppBar>
  );
}
