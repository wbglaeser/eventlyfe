import React, { useEffect } from 'react';
import { Authentification } from "states/authentification"
import LandingPage from "components/main/LandingPage"

export default function Logout() {
  let authentification = Authentification.useContainer();

  const checkSession = async () => {
    const res = await fetch('http://localhost:8001/users/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      credentials: 'include',
      body: JSON.stringify({}),
    }).then((response) => response.json())
    .then(response => {
      authentification.logout()
    })
  }

  useEffect(() => {
      checkSession()
  })

  return (
    <LandingPage />
  );
}
