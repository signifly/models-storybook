import { createAvatar } from './Avatar'

export const createAvatarScroll = ({ title, avatars }) => {
  const avatarScroll = document.createElement('div')
  avatarScroll.className = 'sb-avatar-scroll'

  if (title) {
    const avatarScrollTitle = document.createElement('h2')
    avatarScrollTitle.className = 'sb-avatar-scroll__title'
    avatarScrollTitle.innerText = title
    avatarScroll.appendChild(avatarScrollTitle)
  }

  const avatarsWrapper = document.createElement('div')
  avatarsWrapper.className = 'sb-avatar-scroll__wrapper'

  avatarScroll.appendChild(avatarsWrapper)

  if (avatars && avatars.length) {
    avatars.forEach((avatar) => {
      let avatarElement = createAvatar(avatar)
      avatarsWrapper.appendChild(avatarElement)
    })
  }

  return avatarScroll
}
