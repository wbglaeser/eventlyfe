import React from 'react';
import StatedRoutes from "routing/StatedRoutes"
import { EventDetails } from "states/eventDetails"

export default function EventStateInit() {

  return (
    <EventDetails.Provider>

      <StatedRoutes />

    </EventDetails.Provider>
  );
}
