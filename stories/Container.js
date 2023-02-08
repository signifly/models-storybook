import { createLink } from './Link'

export const createContainer = ({ title, linkLabel, linkUrl }) => {
  const container = document.createElement('div')
  container.className = 'sb-container'

  if (title || linkLabel) {
    const containerHeader = document.createElement('div')
    containerHeader.className = 'sb-container__header'
    container.appendChild(containerHeader)

    if (title) {
      const containerTitle = document.createElement('h2')
      containerTitle.className = 'sb-title'
      containerTitle.innerText = title
      containerHeader.appendChild(containerTitle)
    }

    if (linkLabel) {
      const containerLink = createLink({ label: linkLabel, url: linkUrl })
      containerHeader.appendChild(containerLink)
    }
  }

  return container
}
