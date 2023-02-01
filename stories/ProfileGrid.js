import { addClasses } from '../utilities/classes-names'
import { createProfile } from './Profile'
import { createButton } from './Button'

export const createProfileGrid = ({ title, profiles, buttonLabel }) => {
  const grid = document.createElement('div')
  grid.className = addClasses(['grid', 'profile-grid--container'])

  if (title) {
    const titleElement = document.createElement('h6')
    titleElement.className = addClasses(['title', 'span-6'])
    titleElement.innerText = title
    grid.appendChild(titleElement)
  }

  const profileGrid = document.createElement('div')
  profileGrid.className = addClasses(['profile-grid', 'span-6', 'start-1'])

  profiles.forEach((profile) => {
    let profileElement = createProfile(profile)
    profileGrid.appendChild(profileElement)
  })

  grid.appendChild(profileGrid)

  const buttonLabelElement = createButton({ label: buttonLabel, onClick: () => {} })
  buttonLabelElement.className = addClasses([
    ...buttonLabelElement.className.split(' '),
    'start-1',
    'span-2'
  ])

  grid.appendChild(buttonLabelElement)

  return grid
}
