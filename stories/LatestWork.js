import { addClasses } from '../utilities/classes-names'
import { createSection } from './Section'
import { createCard } from './Card'
import { createButton } from './Button'
import { createButtonGroup } from './ButtonGroup'

export const createLatestWork = ({ title, buttons, cards, mainButton }) => {
  const section = createSection({ title })

  if (buttons && buttons.length) {
    const buttonGroupElement = createButtonGroup({ buttons })
    section.appendChild(buttonGroupElement)
  }

  if (cards && cards.length) {
    const grid5 = document.createElement('div')
    grid5.className = addClasses(['sb-grid', 'sb-grid--5'])
    cards.forEach((card) => {
      let cardElement = createCard(card)
      cardElement.className = addClasses([cardElement.className, 'sm-span-2'])
      grid5.appendChild(cardElement)
    })
    section.appendChild(grid5)
  }

  if (mainButton) {
    const buttonContainer = document.createElement('div')
    buttonContainer.className = addClasses(['sb-flex', 'sb-center'])
    section.appendChild(buttonContainer)
    const buttonElement = createButton(mainButton)
    buttonContainer.appendChild(buttonElement)
  }

  return section
}
