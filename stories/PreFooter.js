import { addClasses } from '../utilities/classes-names'
import { createLink } from './Link'
import { createSocialLink } from './SocialLink'

export const createPreFooter = ({
  newsletter,
  socialLinks,
  linkGroups,
  copyright,
  dark,
  displayLinksOnMobile = false,
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
    newsletterElement.className = addClasses([
      'sb-pre-footer__newsletter',
      'span-4',
      'sm-span-full'
    ])

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

      socialLinks.forEach((socialLink) => {
        const socialLinkElement = createSocialLink(socialLink)
        newsletterSocial.appendChild(socialLinkElement)
      })
    }

    preFooterTop.appendChild(newsletterElement)
  }

  if (linkGroups && linkGroups.length) {
    linkGroups.forEach((linkGroup) => {
      const linkGroupElement = document.createElement('div')
      linkGroupElement.className = addClasses([
        'sb-link-group',
        'span-2',
        'sm-span-full',
        displayLinksOnMobile ? 'sb-link-group--display' : ''
      ])

      const linkGroupTitle = document.createElement('p')
      linkGroupTitle.innerText = linkGroup.title
      linkGroupTitle.className = 'sb-link-group__title'
      const arrowDown = `<span>
      <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 0.726562L4 3.72656L7 0.726562" stroke="white" stroke-linecap="square"/>
      </svg>
      </span>`
      linkGroupTitle.insertAdjacentHTML('beforeend', arrowDown)
      linkGroupElement.appendChild(linkGroupTitle)

      const linkGroupList = document.createElement('ul')
      linkGroupList.className = addClasses(['sb-link-group__list', 'span-2', 'sm-span-full'])
      linkGroupElement.appendChild(linkGroupList)

      if (linkGroup.links && linkGroup.links.length) {
        linkGroup.links.forEach((link) => {
          const linkWrapper = document.createElement('li')
          const linkElement = createLink({ label: link.label, url: link.url })
          linkWrapper.appendChild(linkElement)
          linkGroupList.appendChild(linkWrapper)
        })
      }

      preFooterTop.appendChild(linkGroupElement)
    })
  }

  if (copyright) {
    const copyrightElement = document.createElement('p')
    copyrightElement.innerText = copyright
    copyrightElement.className = addClasses(['sb-copyright', 'span-4', 'start-1', 'sm-span-full'])
    preFooterBottom.appendChild(copyrightElement)
  }

  preFooter.appendChild(preFooterTop)
  preFooter.appendChild(preFooterBottom)

  return preFooter
}
