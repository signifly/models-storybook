import { addClasses } from '../utilities/classes-names'

export const createSection = ({ title }) => {
  const section = document.createElement('div')
  section.className = 'sb-section'
  const sectionTitle = document.createElement('h2')
  sectionTitle.className = 'sb-section__title'
  sectionTitle.innerHTML = title
  section.appendChild(sectionTitle)

  return section
}
