import { addClasses } from '../utilities/classes-names'
import { createSection } from './Section'
import { createCard } from './Card'
import { createButton } from './Button'

export const createYourModels = ({ loggedIn = false, title, cards = [], mainButton, mainText }) => {
  const section = createSection({ title })

  const grid5 = document.createElement('div')
  grid5.className = addClasses(['grid', 'grid--5'])

  if (cards && cards.length) {
    cards.forEach((card) => {
      const cardElement = createCard(card)
      grid5.appendChild(cardElement)
    })

    if (loggedIn) {
      section.appendChild(grid5)
    } else {
      const gridContainer = document.createElement('div')
      gridContainer.className = addClasses(['container', 'logged-off'])
      gridContainer.appendChild(grid5)
      section.appendChild(gridContainer)
    }
  }

  if (!loggedIn) {
    const btnContainer = document.createElement('div')
    btnContainer.className = addClasses(['flex', 'center'])
    const btnElement = createButton(mainButton)
    btnContainer.appendChild(btnElement)
    section.appendChild(btnContainer)

    const textContainer = document.createElement('div')
    textContainer.className = addClasses(['flex', 'center'])
    const mainTextElement = document.createElement('p')
    mainTextElement.className = addClasses(['subtitle'])
    mainTextElement.innerText = mainText
    textContainer.appendChild(mainTextElement)
    section.appendChild(textContainer)
  }

  return section
}
