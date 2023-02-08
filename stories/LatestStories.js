import { addClasses } from '../utilities/classes-names'
import { createLink } from './Link'
import { createSection } from './Section'
import { createVideoCard } from './VideoCard'

export const createLatestStories = ({ title, cards, mainLink }) => {
  const section = createSection({ title })

  if (cards && cards.length) {
    const grid5 = document.createElement('div')
    grid5.className = addClasses(['sb-latest-stories', 'sb-grid', 'sb-grid--5'])
    cards.forEach((card) => {
      let cardElement = createVideoCard(card)
      cardElement.className = addClasses([cardElement.className, 'sm-span-full'])
      grid5.appendChild(cardElement)
    })
    section.appendChild(grid5)
  }

  if (mainLink) {
    const linkContainer = document.createElement('div')
    linkContainer.className = addClasses(['sb-flex', 'sb-center'])
    section.appendChild(linkContainer)
    const linkElement = createLink({ label: mainLink.label, url: mainLink.url })
    linkElement.className = addClasses([linkElement.className, 'sb-latest-stories__link'])
    linkContainer.appendChild(linkElement)
  }

  return section
}
