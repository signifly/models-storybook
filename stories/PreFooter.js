import { addClasses } from '../utilities/classes-names'

export const createPreFooter = ({ newsletter, linkGroups, copyright, dark, onClick }) => {
  const preFooter = document.createElement('div')
  preFooter.className = addClasses(['pre-footer', dark ? 'pre-footer--dark' : 'pre-footer--light'])

  const preFooterTop = document.createElement('div')
  preFooterTop.className = addClasses(['pre-footer__top', 'grid'])
  const preFooterBottom = document.createElement('div')
  preFooterBottom.className = addClasses(['pre-footer__bottom', 'grid'])

  if (newsletter) {
    const newsletterElement = document.createElement('div')
    newsletterElement.className = addClasses(['pre-footer__newsletter', 'span-4'])

    const newsletterTitle = document.createElement('div')
    newsletterTitle.className = addClasses(['newsletter__title'])
    newsletterTitle.innerText = newsletter.title
    newsletterElement.appendChild(newsletterTitle)

    const newsletterEmail = document.createElement('div')
    newsletterEmail.className = addClasses(['newsletter__email'])

    const newsletterInput = document.createElement('input')
    newsletterInput.className = addClasses(['newsletter__input'])
    newsletterInput.placeholder = newsletter.emailLabel
    const newsletterSubmit = document.createElement('button')
    newsletterSubmit.className = addClasses(['newsletter__submit'])
    newsletterSubmit.innerText = newsletter.submitButton
    newsletterSubmit.addEventListener('click', onClick)
    newsletterEmail.appendChild(newsletterInput)
    newsletterEmail.appendChild(newsletterSubmit)

    newsletterElement.appendChild(newsletterEmail)

    const newsletterSocial = document.createElement('div')
    newsletterSocial.className = addClasses(['newsletter__social-links'])
    newsletterElement.appendChild(newsletterSocial)

    preFooterTop.appendChild(newsletterElement)
  }

  linkGroups.forEach((linkGroup) => {
    const linkGroupElement = document.createElement('ul')
    linkGroupElement.className = addClasses(['link-group', 'span-2'])

    const titleWrapper = document.createElement('li')
    titleWrapper.innerText = linkGroup.title
    titleWrapper.className = addClasses(['link-group__title'])

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
    copyrightElement.className = addClasses(['copyright', 'span-4', 'start-1'])
    preFooterBottom.appendChild(copyrightElement)
  }

  preFooter.appendChild(preFooterTop)
  preFooter.appendChild(preFooterBottom)

  return preFooter
}
