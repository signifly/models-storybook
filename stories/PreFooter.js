export const createPreFooter = ({ newsletter, linkGroups, copyright, dark }) => {
  const preFooter = document.createElement('div')
  preFooter.className = [
    'pre-footer',
    'grid',
    dark ? 'pre-footer--dark' : 'pre-footer--light'
  ].join(' ')

  linkGroups.forEach((linkGroup) => {
    const linkGroupElement = document.createElement('ul')
    linkGroupElement.className = ['link-group', 'span-2'].join(' ')

    const titleWrapper = document.createElement('li')
    titleWrapper.innerText = linkGroup.title
    titleWrapper.className = ['link-group__title'].join(' ')

    linkGroupElement.appendChild(titleWrapper)

    linkGroup.links.forEach((link) => {
      const linkWrapper = document.createElement('li')
      const linkElement = document.createElement('a')
      linkElement.innerText = link.label
      linkElement.href = link.url
      linkWrapper.appendChild(linkElement)
      linkGroupElement.appendChild(linkWrapper)
    })

    preFooter.appendChild(linkGroupElement)
  })

  if (copyright) {
    const copyrightElement = document.createElement('p')
    copyrightElement.innerText = copyright
    copyrightElement.className = ['copyright', 'span-4', 'start-1'].join(' ')
    preFooter.appendChild(copyrightElement)
  }

  return preFooter
}
