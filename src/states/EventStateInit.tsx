import React from 'react';
import StatedRoutes from "routing/StatedRoutes"
import { EventDetails } from "states/eventDetails"
import { Authentification } from "states/authentification"

export default function EventStateInit() {

  return (
    <EventDetails.Provider>
    <Authentification.Provider>

      <StatedRoutes />

    </Authentification.Provider>
    </EventDetails.Provider>
  );
}
