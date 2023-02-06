import { addClasses } from '../utilities/classes-names'
import { createImage } from './Image'

export const createProfile = ({ title, subtitle, onClick, imgSrc }) => {
  const profile = document.createElement('div')
  profile.addEventListener('click', onClick)
  profile.className = addClasses(['sb-profile'])

  const profileImage = createImage({ src: imgSrc })
  profileImage.className = 'sb-profile__img'
  profile.appendChild(profileImage)

  const profileText = document.createElement('div')
  profileText.className = 'sb-profile__text'

  const titleElement = document.createElement('h6')
  titleElement.className = 'sb-title'
  titleElement.innerText = title

  const subtitleElement = document.createElement('p')
  subtitleElement.className = 'sb-subtitle'
  subtitleElement.innerText = subtitle

  profileText.appendChild(titleElement)
  profileText.appendChild(subtitleElement)
  profile.appendChild(profileText)

  return profile
}
