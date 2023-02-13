import { addClasses } from '../utilities/classes-names'
import { createSection } from './Section'
import { createCta } from './Cta'
import { createAvatarGrid } from './AvatarGrid'

export const createAgenciesPeople = ({
  title,
  ctaSections,
  simpleCtaSections,
  avatarGrids,
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

  if (avatarGrids && avatarGrids.length) {
    const avatarGridsGrid = document.createElement('div')
    avatarGridsGrid.className = 'sb-grid'
    avatarGrids.forEach((avatarGrid) => {
      let avatarGridElement = createAvatarGrid(avatarGrid)
      avatarGridElement.className = addClasses([
        avatarGridElement.className,
        'span-6',
        'sm-span-full'
      ])
      avatarGridsGrid.appendChild(avatarGridElement)
      section.appendChild(avatarGridsGrid)
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
