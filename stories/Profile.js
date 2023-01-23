import './profile.css'

import { createImage } from './Image'

export const createProfile = ({ title, subtitle, onClick, imgSrc }) => {
  const profile = document.createElement('div')
  profile.className = 'profile'
  profile.addEventListener('click', onClick)
  profile.className = ['profile'].join(' ')

  const profileImage = createImage({ src: imgSrc })
  profileImage.className = 'profile__img'
  profile.appendChild(profileImage)

  const profileText = document.createElement('div')
  profileText.className = 'profile__text'

  const titleElement = document.createElement('h6')
  titleElement.className = 'title'
  titleElement.innerText = title

  const subtitleElement = document.createElement('p')
  subtitleElement.className = 'subtitle'
  subtitleElement.innerText = subtitle

  profileText.appendChild(titleElement)
  profileText.appendChild(subtitleElement)
  profile.appendChild(profileText)

  return profile
}
