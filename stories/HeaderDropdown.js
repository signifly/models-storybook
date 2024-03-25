import { domToStr, strToDom } from '../utilities/dom'
import { createHeaderDropdownLink } from './HeaderDropdownLink'
import { createHeaderDropdownUser } from './HeaderDropdownUser'
import { createHeaderDropdownTitle } from './HeaderDropdownTitle'
import { createHeaderDropdownProCTA } from './HeaderDropdownProCTA'
import { createHeaderDropdownSocial } from './HeaderDropdownSocial'

export const createHeaderDropdown = ({ itemGroups }) => {
  const dropdownGroups = []

  if (!itemGroups || itemGroups.length === 0) return strToDom('')

  itemGroups.forEach((itemGroup) => {
    const dropdownItems = []

    itemGroup.forEach((item) => {
      if (item.itemType === 'user') {
        dropdownItems.push(domToStr(createHeaderDropdownUser(item)))
      }

      if (item.itemType === 'link') {
        dropdownItems.push(domToStr(createHeaderDropdownLink(item)))
      }

      if (item.itemType === 'title') {
        dropdownItems.push(domToStr(createHeaderDropdownTitle(item)))
      }

      if (item.itemType === 'pro-cta') {
        dropdownItems.push(domToStr(createHeaderDropdownProCTA(item)))
      }

      if (item.itemType === 'social') {
        dropdownItems.push(domToStr(createHeaderDropdownSocial(item)))
      }
    })

    if (dropdownItems.length > 0) {
      dropdownGroups.push(
        `<li class="sb-header-dropdown__item-group">${dropdownItems.join('')}</li>`
      )
    }
  })

  return strToDom(`
  <ul class="sb-header-dropdown sb-font-primary">
    ${dropdownGroups.join('')}
  </ul>
	`)
}
