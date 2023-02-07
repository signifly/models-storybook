import { addClasses } from '../utilities/classes-names'
import { createImage } from './Image'

export const createEditorialHeader = ({ content }) => {
  const editorialHeader = document.createElement('div')
  editorialHeader.className = addClasses(['sb-editorial-header', 'sb-grid'])

  const editorialHeaderText = document.createElement('div')
  editorialHeaderText.className = addClasses(['sb-editorial-header__text', 'span-6'])
  editorialHeader.appendChild(editorialHeaderText)

  const editorialHeaderImg = document.createElement('div')
  editorialHeaderImg.className = addClasses(['sb-editorial-header__img', 'span-6'])
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
  if (content.social) {
  }
  if (content.img) {
    const editorialImage = createImage(content.img)
    editorialHeaderImg.appendChild(editorialImage)
  }

  return editorialHeader
}
