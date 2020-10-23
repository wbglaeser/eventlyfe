import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
    borderBottom: "1px solid black"
  },
  toolbar: {
    display: "flex",
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent: "center",
    minHeight: "0vh"
  },
  text: {
    color: "black",
    paddingRight: "3vw",
    paddingLeft: "3vw",
    fontFamily: "Arial Black",
    fontSize: "48px"
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
