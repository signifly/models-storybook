import { addClasses } from '../utilities/classes-names'

export const createSection = ({ title }) => {
  const section = document.createElement('sb-section')
  section.className = addClasses(['sb-section'])
  const sectionTitle = document.createElement('h2')
  sectionTitle.className = addClasses(['sb-section__title'])
  sectionTitle.innerHTML = title
  section.appendChild(sectionTitle)

  return section
}
