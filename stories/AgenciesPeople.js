import { addClasses } from '../utilities/classes-names'
import { createSection } from './Section'
import { createCta } from './Cta'
import { createCard } from './Card'
import { createButton } from './Button'
import { createProfileGrid } from './ProfileGrid'

export const createAgenciesPeople = ({ title, ctaSections, simpleCtaSections, profileGrids, cards, mainButton }) => {
  const section = createSection({ title })

  if (ctaSections && ctaSections.length) {
    const ctaGrid = document.createElement('div')
    ctaGrid.className = addClasses(['sb-grid'])
    ctaSections.forEach((cta) => {
      let ctaElement = createCta(cta)
      ctaElement.className = addClasses([ctaElement.className, 'span-6'])
      ctaGrid.appendChild(ctaElement)
    })
    section.appendChild(ctaGrid)
  }

  if (profileGrids && profileGrids.length) {
    profileGrids.forEach((profileGrid) => {
      let profileGridElement = createProfileGrid(profileGrid)
      section.appendChild(profileGridElement)
    })
  }

  if (simpleCtaSections && simpleCtaSections.length) {
    const ctaGrid = document.createElement('div')
    ctaGrid.className = addClasses(['sb-grid'])
    simpleCtaSections.forEach((cta) => {
      let ctaElement = createCta(cta)
      ctaElement.className = addClasses([ctaElement.className, 'span-6'])
      ctaGrid.appendChild(ctaElement)
    })
    section.appendChild(ctaGrid)
  }


  return section
}
