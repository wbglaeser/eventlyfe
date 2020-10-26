import React from 'react';
import EventQuestion from "components/events/EventQuestion"

import { EventDetails } from "states/eventDetails"

export default function EventStateInit() {

  return (
    <EventDetails.Provider>

      <EventQuestion />

    </EventDetails.Provider>
  );
}
