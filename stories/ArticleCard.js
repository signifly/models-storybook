import { createImage } from './Image'

export const createArticleCard = ({
  size = 'medium',
  title,
  subtitle,
  onClick,
  imgSrc,
  borderRadius
}) => {
  const articleCard = document.createElement('div')
  articleCard.className = 'article-card'
  articleCard.addEventListener('click', onClick)
  articleCard.className = [
    'article-card',
    `article-card--${size}`,
    borderRadius ? 'article-card--border-radius' : ''
  ].join(' ')

  const articleCardText = document.createElement('div')
  articleCardText.className = 'article-card__text'

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

  articleCardImage.className = 'article-card__img'

  articleCard.appendChild(articleCardImage)

  return articleCard
}
