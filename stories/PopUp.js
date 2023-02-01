import { addClasses } from "../utilities/classes-names"

export const createPopUp = ({ fixed }) => {
  const popup = document.createElement('div')
  popup.className = addClasses(['popup', fixed ? 'popup--fixed' : ''])

  return popup
}
