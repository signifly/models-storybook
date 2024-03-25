import { strToDom } from '../utilities/dom'

export const createHeaderDropdownProCTA = ({ label, url }) => {
  return strToDom(
    `<a class="sb-header-dropdown-pro-cta sb-font-primary sb-header-dropdown__item" href="${url || ''}">
      ${label}
      <span>pro</span>
    </a>`
  )
}
