import EventDetails from "data/EventDetails.json"

interface StepLayout {
  [key: string]: string | null;
}
let event_details: Array<StepLayout> = EventDetails;

export function retrieveEventDetailById(identifier: string): StepLayout {
  let _newStep = event_details.filter(function (element) {
      return element.identifier === identifier
    })
  return _newStep[0]
}
