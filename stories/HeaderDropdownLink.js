import { strToDom } from '../utilities/dom'

export const createHeaderDropdownLink = ({
  label,
  url,
  onClick,
  notifications,
  submenu,
  backIcon
}) => {
  let submenuElement = ''

  if (submenu && submenu.is) {
    submenuElement = `
      <span class="sb-header-dropdown-link__submenu">
      ${
        submenu.notifications
          ? `<span "sb-header-dropdown-link__submenu-notifications">${submenu.notifications}</span>`
          : ''
      }
        <span class="sb-header-dropdown-link__submenu-icon chevron-black-icon"></span>
      </span>
    `
  }

  return strToDom(`
  ${
    onClick
      ? `<button class="sb-header-dropdown-link sb-font-primary sb-header-dropdown__item" onclick="${onClick}">`
      : `<a class="sb-header-dropdown-link sb-font-primary sb-header-dropdown__item" href="${url}">`
  }
  <span class="sb-header-dropdown-link__label">
    ${backIcon ? '<span class="sb-header-dropdown-link__back-icon chevron-black-icon"></span>' : ''}
    <span class="sb-header-dropdown-link__label-text">${label}</span>
    ${
      notifications
        ? `<span class="sb-header-dropdown-link__notifications ${
            notifications > 9 ? ' sb-header-dropdown-link__notifications--plus' : ''
          }">
          ${notifications > 9 ? '9+' : notifications}
          </span>`
        : ''
    }
  </span>
  ${submenuElement ? submenuElement : ''}
  ${onClick ? '</button>' : '</a>'}
`)
}
