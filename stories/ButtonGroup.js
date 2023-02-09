import { createButton } from './Button'

export const createButtonGroup = ({ buttons }) => {
  const buttonGroup = document.createElement('div')
  buttonGroup.className = 'sb-button-group'

  if (buttons && buttons.length) {
    buttons.forEach((button) => {
      const buttonElement = createButton(button)
      buttonGroup.appendChild(buttonElement)
    })
  }

  return buttonGroup
}
