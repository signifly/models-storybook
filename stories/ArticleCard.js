import { addClasses } from '../utilities/classes-names'
import { createImage } from './Image'

export const createArticleCard = ({ size = 'large', title, subtitle, onClick, imgSrc }) => {
  const grid = document.createElement('div')
  grid.className = 'sb-grid'

  const articleCard = document.createElement('div')

  articleCard.addEventListener('click', onClick)
  articleCard.className = addClasses([
    'sb-article-card',
    `sb-article-card--${size}`,
    size === 'large' ? 'span-6' : 'span-3',
    'sm-span-full'
  ])

  const articleCardText = document.createElement('div')
  articleCardText.className = addClasses(['sb-article-card__text'])

  const titleElement = document.createElement('h6')
  titleElement.className = 'sb-title'
  titleElement.innerText = title

  const subtitleElement = document.createElement('p')
  subtitleElement.className = 'sb-subtitle'
  subtitleElement.innerText = subtitle

  articleCardText.appendChild(subtitleElement)
  articleCardText.appendChild(titleElement)
  articleCard.appendChild(articleCardText)

  const articleCardImage = createImage({ imgSrc: imgSrc })

  articleCardImage.className = addClasses(['sb-article-card__img'])

  articleCard.appendChild(articleCardImage)

  return articleCard
}
