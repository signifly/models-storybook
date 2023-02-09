import { createProfile } from './Profile'
import { createButton } from './Button'
import { addClasses } from '../utilities/classes-names'

export const createProfileGrid = ({
  title,
  profiles = [],
  buttonLabel,
  onButtonClick,
  linkLabel,
  onLinkClick,
  centeredButton = false,
  fourColumns = false
}) => {
  const grid = document.createElement('div')
  grid.className = addClasses([
    'sb-profile-grid',
    fourColumns ? 'sb-profile-grid--four-columns' : ''
  ])

  const gridHeader = document.createElement('div')
  gridHeader.className = 'sb-profile-grid__header'
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

  if (profiles && profiles.length) {
    const profileGrid = document.createElement('div')
    profileGrid.className = 'sb-profile-grid__profiles'

    profiles.forEach((profile) => {
      let profileElement = createProfile(profile)
      profileGrid.appendChild(profileElement)
    })

    grid.appendChild(profileGrid)
  }

  if (buttonLabel) {
    const buttonWrapper = document.createElement('div')
    buttonWrapper.className = addClasses([
      'sb-profile-grid__button',
      'sb-flex',
      centeredButton ? 'sb-center' : ''
    ])
    const buttonLabelElement = createButton({ label: buttonLabel, onClick: onButtonClick })
    buttonWrapper.appendChild(buttonLabelElement)
    grid.appendChild(buttonWrapper)
  }

  return grid
}
