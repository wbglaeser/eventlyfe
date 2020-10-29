import { createContainer } from 'unstated-next'
import { useState } from 'react'
import { EventDetailsLayout } from "customTypes"


export function useEventDetails(initialState: EventDetailsLayout = {}) {
  let [self, setEventDetails] = useState(initialState)

  const addDetail = (step: string, label: string) => {
    let _self = {...self}
    _self[step] = label
    setEventDetails(_self)
  }

  return { self, addDetail }
}
export const EventDetails = createContainer(useEventDetails)
