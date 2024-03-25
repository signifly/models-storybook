import { strToDom } from '../utilities/dom'

export const createHeaderDropdownUser = ({ image, initials, name, subtitle, url, onClick }) => {
  const avatarContent = image ? `<img src="${image}">` : `<span>${initials}</span>`

  const userContent = `
  <div class="sb-header-dropdown-user__avatar">
    ${avatarContent}
  </div>
  <div class="sb-header-dropdown-user__info">
    <span class="sb-header-dropdown-user__name">${name}</span>
    <span class="sb-header-dropdown-user__subtitle">${subtitle}</span>
  </div>
  `
  if (onClick) {
    return strToDom(`
    <button class="sb-header-dropdown-user sb-font-primary sb-header-dropdown__item" onclick="${onClick}">
      ${userContent}
    </button>
    `)
  } else if (url) {
    return strToDom(`
    <a class="sb-header-dropdown-user sb-font-primary sb-header-dropdown__item" href="${url}">
      ${userContent}
    </a>
    `)
  } else {
    return strToDom(`<div class="sb-header-dropdown-user sb-font-primary sb-header-dropdown__item">${userContent}</div>`)
  }
}
