import { addClasses } from '../utilities/classes-names'
import { createImage } from './Image'

export const createAvatar = ({ title, subtitle, imgSrc, initials, href, onClick }) => {
  const avatar = document.createElement('a')
  avatar.addEventListener('click', onClick)
  avatar.className = 'sb-avatar sb-link--remove-underline'
  avatar.href = href

  if (imgSrc) {
    const avatarImage = createImage({ imgSrc: imgSrc })
    avatarImage.className = 'sb-avatar__img'
    avatar.appendChild(avatarImage)
  } else {
    const avatarImage = document.createElement('div')
    avatarImage.className = addClasses([
      'sb-avatar__img',
      'sb-avatar__img--initials',
      'sb-flex',
      'sb-center'
    ])
    const avatarInitials = document.createElement('span')
    avatarInitials.innerText = initials
    avatarInitials.className = addClasses(['sb-flex', 'sb-center'])
    avatarImage.appendChild(avatarInitials)
    avatar.appendChild(avatarImage)
  }

  const avatarText = document.createElement('div')
  avatarText.className = 'sb-avatar__text'

  const titleElement = document.createElement('h6')
  titleElement.className = 'sb-title'
  titleElement.innerText = title

  const subtitleElement = document.createElement('p')
  subtitleElement.className = 'sb-subtitle'
  subtitleElement.innerText = subtitle

  avatarText.appendChild(titleElement)
  avatarText.appendChild(subtitleElement)
  avatar.appendChild(avatarText)

  return avatar
}
