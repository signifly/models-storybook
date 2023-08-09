import { addClasses } from '../utilities/classes-names'

export const createSection = ({
  title = undefined,
  noPaddingLg = false,
  noPaddingMd = false,
  noPaddingSm = false
}) => {
  const section = document.createElement('div')
  section.className = addClasses([
    'sb-section',
    noPaddingLg ? 'sb-section--no-padding-lg' : '',
    noPaddingMd ? 'sb-section--no-padding-md' : '',
    noPaddingSm ? 'sb-section--no-padding-sm' : ''
  ])
  if (title) {
    const sectionTitle = document.createElement('h2')
    sectionTitle.className = 'sb-section__title'
    sectionTitle.innerHTML = title
    section.appendChild(sectionTitle)
  }

  return section
}
