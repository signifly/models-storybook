import { createButton } from './Button'
import { addClasses } from '../utilities/classes-names'

export const createButtonGroup = ({ buttons }) => {
  const buttonGroup = document.createElement('div')
  buttonGroup.className = addClasses(['sb-button-group'])

  buttons.forEach((button) => {
    const buttonElement = createButton(button)
    buttonGroup.appendChild(buttonElement)
  })

  return buttonGroup
}
