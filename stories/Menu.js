import { addClasses } from '../utilities/classes-names'
import { createLink } from './Link'

export const createMenu = ({ header = false, links }) => {
  const menu = document.createElement('ul')
  menu.className = addClasses(['sb-menu', 'sb-container', header ? 'sb-menu--header' : ''])

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

  return menu
}
