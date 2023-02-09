import { addClasses } from '../utilities/classes-names'
import { createLink } from './Link'

export const createMenu = ({ size = 'small', links }) => {
  const menu = document.createElement('ul')
  menu.className = addClasses(['sb-menu', `sb-menu--${size}`, 'sb-container'])

  if (links && links.length) {
    links.forEach((link) => {
      let linkWrapper = document.createElement('li')
      linkWrapper.className = addClasses([
        'sb-menu__item',
        link.selected ? 'sb-menu__item--selected' : ''
      ])

      const linkElement = createLink({ label: link.label, url: link.url })

      linkWrapper.appendChild(linkElement)
      menu.appendChild(linkWrapper)
    })
  }

  return menu
}
