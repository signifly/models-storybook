import { createAvatar } from './Avatar'
import { createButton } from './Button'
import { addClasses } from '../utilities/classes-names'

export const createAvatarGrid = ({
  title,
  avatars = [],
  buttonLabel,
  onButtonClick,
  linkLabel,
  onLinkClick,
  centeredButton = false,
  fourColumns = false
}) => {
  const grid = document.createElement('div')
  grid.className = addClasses([
    'sb-avatar-grid',
    fourColumns ? 'sb-avatar-grid--four-columns' : ''
  ])

  const gridHeader = document.createElement('div')
  gridHeader.className = 'sb-avatar-grid__header'
  grid.appendChild(gridHeader)

  if (title) {
    const titleElement = document.createElement('h6')
    titleElement.className = 'sb-title'
    titleElement.innerText = title
    gridHeader.appendChild(titleElement)
  }

  if (linkLabel) {
    const linkElement = document.createElement('p')
    linkElement.className = 'sb-link'
    linkElement.innerText = linkLabel
    linkElement.addEventListener('click', onLinkClick)
    gridHeader.appendChild(linkElement)
  }

  if (avatars && avatars.length) {
    const avatarGrid = document.createElement('div')
    avatarGrid.className = 'sb-avatar-grid__avatars'

    avatars.forEach((avatar) => {
      let avatarElement = createAvatar(avatar)
      avatarGrid.appendChild(avatarElement)
    })

    grid.appendChild(avatarGrid)
  }

  if (buttonLabel) {
    const buttonWrapper = document.createElement('div')
    buttonWrapper.className = addClasses([
      'sb-avatar-grid__button',
      'sb-flex',
      centeredButton ? 'sb-center' : ''
    ])
    const buttonLabelElement = createButton({ label: buttonLabel, onClick: onButtonClick })
    buttonWrapper.appendChild(buttonLabelElement)
    grid.appendChild(buttonWrapper)
  }

  return grid
}
