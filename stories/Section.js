export const createSection = ({ title }) => {
  const section = document.createElement('section')
  section.className = ['section'].join(' ')
  const sectionTitle = document.createElement('h2')
  sectionTitle.className = ['section__title'].join(' ')
  sectionTitle.innerText = title
  section.appendChild(sectionTitle)

  return section
}
