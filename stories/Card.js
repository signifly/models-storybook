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
  card.className = 'card'
  card.addEventListener('click', onClick)
  card.className = addClasses([
    'card',
    borders ? 'card--borders' : '',
    borderRadius ? 'card--border-radius' : '',
    titleMargin ? 'card--title-margin' : ''
  ])

  const cardText = document.createElement('div')
  cardText.className = 'card__text'

  if (title) {
    const titleElement = document.createElement('h6')
    titleElement.className = 'title'
    titleElement.innerText = title
    cardText.appendChild(titleElement)
  }

  if (subtitle) {
    const subtitleElement = document.createElement('p')
    subtitleElement.className = 'subtitle'
    subtitleElement.innerText = subtitle
    cardText.appendChild(subtitleElement)
  }

  if (subtext) {
    const subtextElement = document.createElement('p')
    subtextElement.className = 'subtext'
    subtextElement.innerText = subtext
    cardText.appendChild(subtextElement)
  }

  card.appendChild(cardText)

  const cardImage = createImage({ src: imgSrc })

  cardImage.className = 'card__img'

  card.appendChild(cardImage)

  return card
}
