import { addClasses } from '../utilities/classes-names'
import { createSection } from './Section'
import { createCta } from './Cta'
import { createCard } from './Card'
import { createButton } from './Button'
import { createProfileGrid } from './ProfileGrid'

export const createAgenciesPeople = ({
  title,
  ctaSections,
  simpleCtaSections,
  profileGrids,
  cards,
  mainButton
}) => {
  const section = createSection({ title })

  if (ctaSections && ctaSections.length) {
    const ctaGrid = document.createElement('div')
    ctaGrid.className = 'sb-grid'
    ctaSections.forEach((cta) => {
      let ctaElement = createCta(cta)
      ctaElement.className = addClasses([ctaElement.className, 'span-6', 'sm-span-full'])
      ctaGrid.appendChild(ctaElement)
    })
    section.appendChild(ctaGrid)
  }

  if (profileGrids && profileGrids.length) {
    const profileGridsGrid = document.createElement('div')
    profileGridsGrid.className = 'sb-grid'
    profileGrids.forEach((profileGrid) => {
      let profileGridElement = createProfileGrid(profileGrid)
      profileGridElement.className = addClasses([
        profileGridElement.className,
        'span-6',
        'sm-span-full'
      ])
      profileGridsGrid.appendChild(profileGridElement)
      section.appendChild(profileGridsGrid)
    })
  }

  if (simpleCtaSections && simpleCtaSections.length) {
    const ctaGrid = document.createElement('div')
    ctaGrid.className = 'sb-grid'
    simpleCtaSections.forEach((cta) => {
      let ctaElement = createCta(cta)
      ctaElement.className = addClasses([ctaElement.className, 'span-6', 'sm-span-full'])
      ctaGrid.appendChild(ctaElement)
    })
    section.appendChild(ctaGrid)
  }

  return section
}
