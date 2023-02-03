import { addClasses } from '../utilities/classes-names'
import { createProfile } from './Profile'

export const createProfileScroll = ({ title, profiles }) => {
  const profileScroll = document.createElement('div')
  profileScroll.className = addClasses(['profile-scroll'])

  if (title) {
    const profileScrollTitle = document.createElement('h2')
    profileScrollTitle.className = addClasses(['profile-scroll__title'])
    profileScrollTitle.innerText = title
    profileScroll.appendChild(profileScrollTitle)
  }

  const profilesWrapper = document.createElement('div')
  profilesWrapper.className = addClasses(['profile-scroll__wrapper'])

  profileScroll.appendChild(profilesWrapper)

  profiles.forEach((profile) => {
    let profileElement = createProfile(profile)
    profilesWrapper.appendChild(profileElement)
  })

  return profileScroll
}
