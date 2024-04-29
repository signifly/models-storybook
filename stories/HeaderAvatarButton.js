import { strToDom } from '../utilities/dom'

export const createHeaderAvatarButton = ({ initials, image, opened, notification }) => {
  const avatarContent = image
    ? `
    <div class="sb-header-avatar-btn__image">
      <div class="sb-header-avatar-btn__image-wrapper">
        <img src="${image}">
      </div>
    </div>`
    : `<span class="sb-header-avatar-btn__initials">
    ${initials}
    </span>`

  return strToDom(`
		<button class="sb-header-avatar-btn ${opened ? 'opened' : ''} ${
    notification ? 'notification' : ''
  }">
    ${avatarContent}

    <span class="sb-header-avatar-btn__icon chevron-black-icon"></span>
		</button>
	`)
}
