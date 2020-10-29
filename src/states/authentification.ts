import { createContainer } from 'unstated-next'
import { useState } from 'react'

export function useAuthentification(initialState: Boolean = false) {
  let [self, setAuthentification] = useState(initialState)

  const login = () => {
    setAuthentification(true)
  }

  const logged_in = (): Boolean => {
    if (self) { return true }
    else { return false }
  }

  return { self, login, logged_in }
}
export const Authentification = createContainer(useAuthentification)
