import { addClasses } from '../utilities/classes-names'

export const createSection = ({ title }) => {
  const section = document.createElement('section')
  section.className = addClasses(['section'])
  const sectionTitle = document.createElement('h2')
  sectionTitle.className = addClasses(['section__title'])
  sectionTitle.innerHTML = title
  section.appendChild(sectionTitle)

  return section
}
