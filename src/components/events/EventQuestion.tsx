import React, { useCallback, useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { Link, useParams, useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import EventForm from 'components/events/EventForm'
import EventOverview from 'components/events/EventOverview'

export default function EventQuestion() {
  let { step }: any = useParams()

  return (
    <>
      {
        (step !== "overview")?
        <EventForm step={step}/>:
        <EventOverview />
      }
    </>
  );
}
