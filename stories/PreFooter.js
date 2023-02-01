export const createPreFooter = ({ newsletter, linkGroups, copyright, dark }) => {
  const preFooter = document.createElement('div')
  preFooter.className = ['pre-footer', dark ? 'pre-footer--dark' : 'pre-footer--light'].join(' ')

  const preFooterTop = document.createElement('div')
  preFooterTop.className = ['pre-footer__top', 'grid'].join(' ')
  const preFooterBottom = document.createElement('div')
  preFooterBottom.className = ['pre-footer__bottom', 'grid'].join(' ')

  if (newsletter) {
    const newsletterElement = document.createElement('div')
    newsletterElement.className = ['pre-footer__newsletter', 'span-4'].join(' ')

    const newsletterTitle = document.createElement('div')
    newsletterTitle.className = ['newsletter__title'].join(' ')
    newsletterTitle.innerText = newsletter.title
    newsletterElement.appendChild(newsletterTitle)

    const newsletterEmail = document.createElement('div')
    newsletterEmail.className = ['newsletter__email'].join(' ')

    const newsletterInput = document.createElement('input')
    newsletterInput.className = ['newsletter__input'].join(' ')
    newsletterInput.placeholder = newsletter.emailLabel
    const newsletterSubmit = document.createElement('button')
    newsletterSubmit.className = ['newsletter__submit'].join(' ')
    newsletterSubmit.innerText = newsletter.submitButton
    newsletterEmail.appendChild(newsletterInput)
    newsletterEmail.appendChild(newsletterSubmit)

    newsletterElement.appendChild(newsletterEmail)

    const newsletterSocial = document.createElement('div')
    newsletterSocial.className = ['newsletter__social-links'].join(' ')
    newsletterElement.appendChild(newsletterSocial)

    preFooterTop.appendChild(newsletterElement)
  }

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

    preFooterTop.appendChild(linkGroupElement)
  })

  if (copyright) {
    const copyrightElement = document.createElement('p')
    copyrightElement.innerText = copyright
    copyrightElement.className = ['copyright', 'span-4', 'start-1'].join(' ')
    preFooterBottom.appendChild(copyrightElement)
  }

  preFooter.appendChild(preFooterTop)
  preFooter.appendChild(preFooterBottom)

  return preFooter
}
