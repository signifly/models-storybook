import { addClasses } from '../utilities/classes-names'
import { createSection } from './Section'
import { createCard } from './Card'
import { createButton } from './Button'

export const createYourModels = ({ loggedIn = false, title, cards = [], mainButton, mainText }) => {
  const section = createSection({ title })

  const grid5 = document.createElement('div')
  grid5.className = addClasses(['sb-grid', 'sb-grid--5'])

  if (cards && cards.length) {
    cards.forEach((card) => {
      const cardElement = createCard(card)
      grid5.appendChild(cardElement)
    })

    if (loggedIn) {
      section.appendChild(grid5)
    } else {
      const gridContainer = document.createElement('div')
      gridContainer.className = addClasses(['sb-container', 'sb-logged-off'])
      gridContainer.appendChild(grid5)
      section.appendChild(gridContainer)
    }
  }

  if (!loggedIn) {
    const btnContainer = document.createElement('div')
    btnContainer.className = addClasses(['sb-flex', 'sb-center'])
    const btnElement = createButton(mainButton)
    btnContainer.appendChild(btnElement)
    section.appendChild(btnContainer)

    const textContainer = document.createElement('div')
    textContainer.className = addClasses(['sb-flex', 'sb-center'])
    const mainTextElement = document.createElement('p')
    mainTextElement.className = 'sb-subtitle'
    mainTextElement.innerText = mainText
    textContainer.appendChild(mainTextElement)
    section.appendChild(textContainer)
  }

  return section
}
