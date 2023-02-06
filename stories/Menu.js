import { addClasses } from '../utilities/classes-names'

export const createMenu = ({ header = false, links }) => {
  const menu = document.createElement('ul')
  menu.className = addClasses(['sb-menu', 'sb-container', header ? 'sb-menu--header' : ''])

  links.forEach((link) => {
    let linkWrapper = document.createElement('li')
    linkWrapper.className = addClasses(['sb-link', link.selected ? 'sb-link--selected' : ''])
    let linkElement = document.createElement('a')
    linkElement.innerText = `${link.label}.`
    linkElement.href = link.url
    linkWrapper.appendChild(linkElement)
    menu.appendChild(linkWrapper)
  })

  return menu
}
