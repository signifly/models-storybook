import { addClasses } from '../utilities/classes-names'
import { createImage } from './Image'

export const createCard = ({
  title,
  subtitle,
  subtext,
  onClick,
  imgSrc,
  borders,
  borderRadius,
  titleMargin
}) => {
  const card = document.createElement('div')
  card.className = 'sb-card'
  card.addEventListener('click', onClick)
  card.className = addClasses([
    'sb-card',
    borders ? 'sb-card--borders' : '',
    borderRadius ? 'sb-card--border-radius' : '',
    titleMargin ? 'sb-card--title-margin' : ''
  ])

  const cardText = document.createElement('div')
  cardText.className = 'sb-card__text'

  if (title) {
    const titleElement = document.createElement('h6')
    titleElement.className = 'sb-title'
    titleElement.innerText = title
    cardText.appendChild(titleElement)
  }

  if (subtitle) {
    const subtitleElement = document.createElement('p')
    subtitleElement.className = 'sb-subtitle'
    subtitleElement.innerText = subtitle
    cardText.appendChild(subtitleElement)
  }

  if (subtext) {
    const subtextElement = document.createElement('p')
    subtextElement.className = 'sb-subtext'
    subtextElement.innerText = subtext
    cardText.appendChild(subtextElement)
  }

  card.appendChild(cardText)

  const cardImage = createImage({ src: imgSrc })

  cardImage.className = 'sb-card__img'

  card.appendChild(cardImage)

  return card
}
