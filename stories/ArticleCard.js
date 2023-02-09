import { addClasses } from '../utilities/classes-names'
import { createImage } from './Image'

export const createArticleCard = ({
  size = 'large',
  title,
  subtitle,
  onClick,
  imgSrc,
  largeSpan = false,
  halfGrid = false
}) => {
  const articleCard = document.createElement('div')
  articleCard.addEventListener('click', onClick)
  articleCard.className = addClasses(['sb-article-card', `sb-article-card--${size}`])

  if (halfGrid) {
    articleCard.className = addClasses([
      articleCard.className,
      size === 'large' || largeSpan ? 'span-6 sm-span-full' : 'span-3 sm-span-3'
    ])
  } else {
    articleCard.className = addClasses([
      articleCard.className,
      size === 'large' || largeSpan ? 'span-6 sm-span-full' : 'span-3 sm-span-6'
    ])
  }

  const articleCardText = document.createElement('div')
  articleCardText.className = 'sb-article-card__text'

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

  articleCardImage.className = 'sb-article-card__img'

  articleCard.appendChild(articleCardImage)

  return articleCard
}
