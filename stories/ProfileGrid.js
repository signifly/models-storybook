import { addClasses } from '../utilities/classes-names'
import { createProfile } from './Profile'
import { createButton } from './Button'

export const createProfileGrid = ({
  title,
  profiles = [],
  buttonLabel,
  onButtonClick,
  linkLabel,
  onLinkClick
}) => {
  const grid = document.createElement('div')
  grid.className = addClasses(['sb-grid', 'sb-profile-grid--container'])

  if (title) {
    const titleElement = document.createElement('h6')
    titleElement.className = addClasses(['sb-title', 'span-3'])
    titleElement.innerText = title
    grid.appendChild(titleElement)
  }

  if (linkLabel) {
    const linkElement = document.createElement('a')
    linkElement.className = addClasses(['sb-link', 'span-3'])
    linkElement.innerText = linkLabel
    linkElement.addEventListener('click', onLinkClick)
    grid.appendChild(linkElement)
  }

  if (profiles && profiles.length) {
    const profileGrid = document.createElement('div')
    profileGrid.className = addClasses(['sb-profile-grid', 'span-6', 'start-1'])

    profiles.forEach((profile) => {
      let profileElement = createProfile(profile)
      profileGrid.appendChild(profileElement)
    })

    grid.appendChild(profileGrid)
  }

  if (buttonLabel) {
    const buttonLabelElement = createButton({ label: buttonLabel, onClick: onButtonClick })
    buttonLabelElement.className = addClasses([
      ...buttonLabelElement.className.split(' '),
      'start-1',
      'span-2'
    ])

    grid.appendChild(buttonLabelElement)
  }

  return grid
}
