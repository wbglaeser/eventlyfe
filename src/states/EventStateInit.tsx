import React from 'react';
import StatedRoutes from "routing/StatedRoutes"
import { CookiesProvider } from 'react-cookie';
import { EventDetails } from "states/eventDetails"
import { Authentification } from "states/authentification"
import { Cookies } from "states/cookies"

export default function EventStateInit() {

  return (
    <CookiesProvider>
    <Cookies.Provider>
    <EventDetails.Provider>
    <Authentification.Provider>

      <StatedRoutes />

    </Authentification.Provider>
    </EventDetails.Provider>
    </Cookies.Provider>
    </CookiesProvider>
  );
}
