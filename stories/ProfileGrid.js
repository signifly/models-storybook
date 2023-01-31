import { createProfile } from './Profile'
import { createButton } from './Button'

export const createProfileGrid = ({ title, profiles, buttonLabel }) => {
  const grid = document.createElement('div')
  grid.className = ['grid', 'profile-grid--container'].join(' ')

  if (title) {
    const titleElement = document.createElement('h6')
    titleElement.className = ['title', 'span-6'].join(' ')
    titleElement.innerText = title
    grid.appendChild(titleElement)
  }

  const profileGrid = document.createElement('div')
  profileGrid.className = ['profile-grid', 'span-6', 'start-1'].join(' ')

  profiles.forEach((profile) => {
    let profileElement = createProfile(profile)
    profileGrid.appendChild(profileElement)
  })

  grid.appendChild(profileGrid)

  const buttonLabelElement = createButton({ size: 'small', label: buttonLabel, onClick: () => {} })
  buttonLabelElement.className = [
    ...buttonLabelElement.className.split(' '),
    'start-1',
    'span-2'
  ].join(' ')

  grid.appendChild(buttonLabelElement)

  return grid
}
