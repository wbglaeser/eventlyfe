import React, {useCallback} from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, useParams, useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
var path = require('path');
import { retrieveEventDetailById } from "data/Interface"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  welcomeBox: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    height: "50vh",
    marginTop: "3vh"
  },
  welcomeBoxStart: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  welcomeBoxInfoText: {
    fontSize: "28px",
    fontFamily: "Arial Black",
    color: "black",
  },
  linkStyle: {
    textDecoration: 'none'
  },
  startButton: {
    backgroundColor: "white",
    padding: "2vh",
    margin: "10vh",
    fontSize: "28px",
    fontFamily: "Arial Black",
    color: "black",
  }

}));

const onSubmit = (): void => {
  console.log("hi there")
}

export default function EventQuestion() {
  console.log("here we are")
  const classes = useStyles();
  let { step }: any = useParams()
  let stepDetails = retrieveEventDetailById(step)

  const history = useHistory();
  const handleOnClick = useCallback(() => history.push(stepDetails.nextStep), [history]);

  console.log("step", stepDetails)
  return (
    <Grid container className={classes.welcomeBox}>

      <div className={classes.welcomeBoxStart}>

          <div className={classes.welcomeBoxInfoText}>
                {stepDetails.question}
          </div>

          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleOnClick}
          >
            <TextField
              id="standard-full-width"
              style={{ margin: 8 }}
              placeholder={stepDetails.placeholder}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>

          <Link to={"/event/" + stepDetails.nextStep }className={classes.linkStyle}>
            <div className={classes.startButton}>
              Enter your Event Details
            </div>
          </Link>

      </div>
    </Grid>
  );
}
