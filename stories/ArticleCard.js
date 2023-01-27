import { createImage } from './Image'

export const createArticleCard = ({
  size = 'medium',
  title,
  subtitle,
  onClick,
  imgSrc,
  borderRadius
}) => {
  const grid = document.createElement('div')
  grid.className = 'grid'

  const articleCard = document.createElement('div')

  articleCard.addEventListener('click', onClick)
  articleCard.className = [
    'article-card',
    `article-card--${size}`,
    size === 'large' ? 'span-6' : 'span-3',
    borderRadius ? 'article-card--border-radius' : ''
  ].join(' ')

  const articleCardText = document.createElement('div')
  articleCardText.className = ['article-card__text', size === 'large' ? 'span-2' : 'span-3'].join(' ')

  const titleElement = document.createElement('h6')
  titleElement.className = 'title'
  titleElement.innerText = title

  const subtitleElement = document.createElement('p')
  subtitleElement.className = 'subtitle'
  subtitleElement.innerText = subtitle

  articleCardText.appendChild(subtitleElement)
  articleCardText.appendChild(titleElement)
  articleCard.appendChild(articleCardText)

  const articleCardImage = createImage({ src: imgSrc })

  articleCardImage.className = ['article-card__img', size === 'large' ? 'span-4' : 'span-3'].join(' ')

  articleCard.appendChild(articleCardImage)

  grid.appendChild(articleCard)

  return grid
}
