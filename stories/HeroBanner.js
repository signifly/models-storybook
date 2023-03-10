import { addClasses } from '../utilities/classes-names'
import { createLink } from './Link'

export const createHeroBanner = ({
  imgSrc,
  title,
  titleLink,
  subtitle,
  subtitleLink,
  linkLabel,
  linkUrl,
  borders
}) => {
  const grid = document.createElement('div')
  grid.className = 'sb-grid'

  const heroBanner = document.createElement('div')
  heroBanner.className = addClasses([
    'sb-hero-banner',
    'span-full',
    borders ? 'sb-hero-banner--borders' : ''
  ])

  const heroBannerImg = document.createElement('img')
  heroBannerImg.className = 'sb-hero-banner__img'
  heroBannerImg.src = imgSrc

  const heroBannerText = document.createElement('div')
  heroBannerText.className = 'sb-hero-banner__text'

  const titleLinkElem = document.createElement('a')
  titleLinkElem.className = 'sb-link--remove-underline'
  titleLinkElem.href = titleLink

  const titleElement = document.createElement('h1')
  titleElement.className = 'sb-title'
  titleElement.innerText = title

  titleLinkElem.appendChild(titleElement)

  const subtitleLinkElem = document.createElement('a')
  subtitleLinkElem.className = 'sb-link--remove-underline'
  subtitleLinkElem.href = subtitleLink

  const subtitleElement = document.createElement('p')
  subtitleElement.className = 'sb-subtitle'
  subtitleElement.innerText = subtitle

  subtitleLinkElem.appendChild(subtitleElement)

  const linkElement = createLink({ label: linkLabel, url: linkUrl })

  heroBannerText.appendChild(subtitleLinkElem)
  heroBannerText.appendChild(titleLinkElem)
  heroBannerText.appendChild(linkElement)
  heroBanner.appendChild(heroBannerImg)
  heroBanner.appendChild(heroBannerText)

  grid.appendChild(heroBanner)

  return grid
}
