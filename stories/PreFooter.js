import { addClasses } from '../utilities/classes-names'
import { createLink } from './Link'
import { createSocialLink } from './SocialLink'

export const createPreFooter = ({
  newsletter,
  socialLinks,
  linkGroups,
  copyright,
  dark,
  onClick
}) => {
  const preFooter = document.createElement('div')
  preFooter.className = addClasses([
    'sb-pre-footer',
    dark ? 'sb-pre-footer--dark' : 'sb-pre-footer--light'
  ])

  const preFooterTop = document.createElement('div')
  preFooterTop.className = addClasses(['sb-pre-footer__top', 'sb-grid'])
  const preFooterBottom = document.createElement('div')
  preFooterBottom.className = addClasses(['sb-pre-footer__bottom', 'sb-grid'])

  if (newsletter) {
    const newsletterElement = document.createElement('div')
    newsletterElement.className = addClasses(['sb-pre-footer__newsletter', 'span-4'])

    const newsletterTitle = document.createElement('div')
    newsletterTitle.className = 'sb-newsletter__title'
    newsletterTitle.innerText = newsletter.title
    newsletterElement.appendChild(newsletterTitle)

    const newsletterEmail = document.createElement('div')
    newsletterEmail.className = 'sb-newsletter__email'

    const newsletterInput = document.createElement('input')
    newsletterInput.className = 'sb-newsletter__input'
    newsletterInput.placeholder = newsletter.emailLabel
    const newsletterSubmit = document.createElement('button')
    newsletterSubmit.className = 'sb-newsletter__submit'
    newsletterSubmit.innerText = newsletter.submitButton
    newsletterSubmit.addEventListener('click', onClick)
    newsletterEmail.appendChild(newsletterInput)
    newsletterEmail.appendChild(newsletterSubmit)

    newsletterElement.appendChild(newsletterEmail)

    if (socialLinks && socialLinks.length) {
      const newsletterSocial = document.createElement('div')
      newsletterSocial.className = 'sb-newsletter__social-links'
      newsletterElement.appendChild(newsletterSocial)

      socialLinks.forEach(socialLink => {
        const socialLinkElement = createSocialLink(socialLink)
        newsletterSocial.appendChild(socialLinkElement)
      })
    }

    preFooterTop.appendChild(newsletterElement)
  }

  linkGroups.forEach((linkGroup) => {
    const linkGroupElement = document.createElement('ul')
    linkGroupElement.className = addClasses(['sb-link-group', 'span-2'])

    const titleWrapper = document.createElement('li')
    titleWrapper.innerText = linkGroup.title
    titleWrapper.className = 'sb-link-group__title'

    linkGroupElement.appendChild(titleWrapper)

    linkGroup.links.forEach((link) => {
      const linkWrapper = document.createElement('li')
      const linkElement = createLink({ label: link.label, url: link.url })
      linkWrapper.appendChild(linkElement)
      linkGroupElement.appendChild(linkWrapper)
    })

    preFooterTop.appendChild(linkGroupElement)
  })

  if (copyright) {
    const copyrightElement = document.createElement('p')
    copyrightElement.innerText = copyright
    copyrightElement.className = addClasses(['sb-copyright', 'span-4', 'start-1'])
    preFooterBottom.appendChild(copyrightElement)
  }

  preFooter.appendChild(preFooterTop)
  preFooter.appendChild(preFooterBottom)

  return preFooter
}
