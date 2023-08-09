import { addClasses } from '../utilities/classes-names'
import { createLink } from './Link'

export const createContainer = ({ title, linkLabel, linkUrl, headerBorder }) => {
  const container = document.createElement('div')
  container.className = 'sb-container'

  if (title || linkLabel) {
    const containerHeader = document.createElement('div')
    containerHeader.className = addClasses([
      'sb-container__header',
      headerBorder ? 'sb-container__header--border' : ''
    ])
    container.appendChild(containerHeader)

    if (title) {
      const containerTitle = document.createElement('h2')
      containerTitle.className = 'sb-title'
      containerTitle.innerText = title
      containerHeader.appendChild(containerTitle)
    }

    if (linkLabel || linkUrl) {
      const containerLink = createLink({ label: linkLabel, url: linkUrl })
      containerHeader.appendChild(containerLink)
    }
  }

  return container
}
