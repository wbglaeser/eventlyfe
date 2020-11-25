import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { Authentification } from "states/authentification"

const useStyles = makeStyles((theme) => ({
  welcomeBox: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "flex-start",
    height: "100%",
    width: "100%",
    padding: "100px"
  },
  iconArray: {
    width: "100%",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingBottom: "25px",
  },
  infoContainer: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "100%",
    minHeight: "30vh",
    marginTop: "7vh",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "5px"
  },
  infoEvently: {
    maxWidth: "60vw",
    padding: "50px",
    fontSize: '28px',
    fontFamily: "Arial",
    color: "black",
  },
  createButtonContainer: {
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  createButton: {
    width: "20vw",
    minHeight: "10vh",
    backgroundColor: "#4aa0ec",
    fontSize: '28px',
    fontFamily: "Arial",
    color: "white",
    textDecoration: 'none',
    padding: "15px",
    marginRight: "30px",
    borderRadius: "5px"
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  let authentification = Authentification.useContainer();

  const checkSession = async () => {
    const res = await fetch('http://localhost:8001/users/validate_session', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      credentials: 'include',
      body: JSON.stringify({}),
    }).then((response) => response.json())
    .then(response => {
      authentification.login()
    })
  }

  useEffect(() => {
      checkSession()
  }, [])

  return (
    <Grid container className={classes.welcomeBox}>

      <div className={classes.iconArray}>
        <div>
           <img src={"../../src/images/megaphon.png"} alt="Girl in a jacket" width="250" height="250"/>
        </div>
        <div>
           <img src={"../../src/images/augenmaske.png"} alt="Girl in a jacket" width="250" height="250"/>
        </div>
        <div>
           <img src={"../../src/images/feuerwerk.png"} alt="Girl in a jacket" width="250" height="250"/>
        </div>
      </div>

      <div className={classes.infoContainer}>
        <div className={classes.infoEvently}>
          Evently allows you to create your own event with worrying about the nitty gritty
          </div>
        <div className={classes.createButtonContainer}>
          <Link to="/event" className={classes.createButton}>
            Create your own Event
          </Link>
        </div>
      </div>
    </Grid>
  );
}
