import './card.css'

import { createImage } from './Image'

export const createCard = ({ size = 'medium', title, subtitle, onClick, imgSrc }) => {
  const card = document.createElement('div')
  card.className = 'card'
  card.addEventListener('click', onClick)
  card.className = ['card', `card--${size}`].join(' ')

  const cardText = document.createElement('div')
  cardText.className = 'card__text'

  const titleElement = document.createElement('h6')
  titleElement.className = 'title'
  titleElement.innerText = title

  const subtitleElement = document.createElement('p')
  subtitleElement.className = 'subtitle'
  subtitleElement.innerText = subtitle

  cardText.appendChild(subtitleElement)
  cardText.appendChild(titleElement)
  card.appendChild(cardText)

  const cardImage = createImage({ src: imgSrc })

  cardImage.className = 'card__img'

  card.appendChild(cardImage)

  return card
}
