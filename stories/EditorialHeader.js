import { addClasses } from '../utilities/classes-names'
import { createImage } from './Image'
import { createSocialLink } from './SocialLink'

export const createEditorialHeader = ({ content }) => {
  const editorialHeader = document.createElement('div')
  editorialHeader.className = addClasses(['sb-editorial-header', 'sb-grid'])

  if (content) {
    const editorialHeaderText = document.createElement('div')
    editorialHeaderText.className = addClasses([
      'sb-editorial-header__text',
      content.img ? 'span-6' : 'span-full',
      'sm-span-full'
    ])
    editorialHeader.appendChild(editorialHeaderText)

    const editorialHeaderImg = document.createElement('div')
    editorialHeaderImg.className = addClasses([
      'sb-editorial-header__img',
      'span-6',
      'sm-span-full'
    ])
    editorialHeader.appendChild(editorialHeaderImg)

    if (content.title) {
      const editorialHeaderTitle = document.createElement('div')
      editorialHeaderTitle.className = 'sb-title'
      editorialHeaderTitle.innerHTML = content.title
      editorialHeaderText.appendChild(editorialHeaderTitle)
    }

    if (content.subtitle) {
      const editorialHeaderSubtitle = document.createElement('div')
      editorialHeaderSubtitle.className = 'sb-subtitle'
      editorialHeaderSubtitle.innerHTML = content.subtitle
      editorialHeaderText.appendChild(editorialHeaderSubtitle)
    }

    if (content.social && content.social.length) {
      const editorialHeaderSocial = document.createElement('div')
      editorialHeaderSocial.className = 'sb-editorial-header__social-links'
      editorialHeaderText.appendChild(editorialHeaderSocial)

      content.social.forEach((socialLink) => {
        const socialLinkElement = createSocialLink(socialLink)
        editorialHeaderSocial.appendChild(socialLinkElement)
      })
    }

    if (content.img) {
      const editorialImage = createImage(content.img)
      editorialHeaderImg.appendChild(editorialImage)
    }
  }

  return editorialHeader
}
