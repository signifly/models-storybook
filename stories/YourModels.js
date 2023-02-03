import { addClasses } from '../utilities/classes-names'
import { createSection } from './Section'
import { createCard } from './Card'

export const createYourModels = ({ title, cards }) => {
  const section = createSection({ title })

  const grid5 = document.createElement('div')
  grid5.className = addClasses(['grid', 'grid--5'])


  cards.forEach((card) => {
    let cardElement = createCard(card)
    grid5.appendChild(cardElement)
  })

  section.appendChild(grid5)

  return section
}
