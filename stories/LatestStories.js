import { addClasses } from '../utilities/classes-names'
import { createSection } from './Section'
import { createVideoCard } from './VideoCard'

export const createLatestStories = ({ title, cards, mainLink }) => {
  const section = createSection({ title })

  if (cards && cards.length) {
    const grid5 = document.createElement('div')
    grid5.className = addClasses(['grid', 'grid--5'])
    cards.forEach((card) => {
      let cardElement = createVideoCard(card)
      grid5.appendChild(cardElement)
    })
    section.appendChild(grid5)
  }

  if (mainLink) {
    const linkContainer = document.createElement('div')
    linkContainer.className = addClasses(['flex', 'center'])
    section.appendChild(linkContainer)
    const linkElement = document.createElement('a')
    linkElement.innerText = mainLink.label
    linkElement.href = mainLink.url
    linkContainer.appendChild(linkElement)
  }

  return section
}
