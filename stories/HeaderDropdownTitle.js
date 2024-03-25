import { strToDom } from '../utilities/dom'

export const createHeaderDropdownTitle = ({ title, status }) => {
  return strToDom(`<span class="sb-header-dropdown__title sb-font-primary ${
    status ? `sb-header-dropdown__title--status` : ''
  }">
  ${title}
  ${
    status
      ? `<span class="sb-header-dropdown__title-status sb-header-dropdown__title-status--${status}">${status}</span>`
      : ''
  }
  </span>`)
}
