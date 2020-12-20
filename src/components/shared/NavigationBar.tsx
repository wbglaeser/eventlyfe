import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom"
import { Authentification } from "states/authentification"

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  infoSection: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "black",
    paddingRight: "3vw",
    paddingLeft: "3vw",
    fontFamily: "Arial",
    fontSize: "24px",
    lineHeight: "0px"
  },
  linkStyle: {
    textDecoration: 'none'
  },
}));

export default function NavigationBar() {
  const classes = useStyles();
  let authentification = Authentification.useContainer();

  const logoutUser = async () => {
    authentification.logout();
    const res = await fetch('http://localhost:8001/logout', {
          method: 'POST',
          credentials: 'include',
      })
      .then(response => response.json())
      .then(response => {})
  }

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>

      <Link to="/" className={classes.linkStyle}>
        <h3 className={classes.text}>Evently</h3>
      </Link>

      <div className={classes.infoSection}>
      {
        authentification.logged_in()?
        <Link to="/dashboard" className={classes.linkStyle}>
          <h3 className={classes.text}>Your Events</h3>
        </Link>:
        null
      }
        <Link to="/about" className={classes.linkStyle}>
          <h3 className={classes.text}>About us</h3>
        </Link>

        {
          authentification.logged_in()?
          <Link to="/" onClick={() => logoutUser()} className={classes.linkStyle}>
            <h3 className={classes.text}>Logout</h3>
          </Link>:
          <Link to="/login" className={classes.linkStyle}>
            <h3 className={classes.text}>Login</h3>
          </Link>
        }
      </div>

    </AppBar>
  );
}
