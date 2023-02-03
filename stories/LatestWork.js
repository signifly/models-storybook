import { addClasses } from '../utilities/classes-names'
import { createSection } from './Section'
import { createCard } from './Card'
import { createButtonGroup } from './ButtonGroup'

export const createLatestWork = ({ title, buttons, cards }) => {
  const section = createSection({ title })

  if (buttons && buttons.length) {
    const buttonGroupElement = createButtonGroup({ buttons })
    section.appendChild(buttonGroupElement)
  }

  const grid5 = document.createElement('div')
  grid5.className = addClasses(['grid', 'grid--5'])

  if (cards && cards.length) {
    cards.forEach((card) => {
      let cardElement = createCard(card)
      grid5.appendChild(cardElement)
    })
  }

  section.appendChild(grid5)

  return section
}
