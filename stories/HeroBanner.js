export const createHeroBanner = ({ imgSrc, title, subtitle, linkLabel, linkUrl }) => {
  const grid = document.createElement('div')
  grid.className = 'sb-grid'

  const heroBanner = document.createElement('div')
  heroBanner.className = 'sb-hero-banner span-full'

  const heroBannerImg = document.createElement('img')
  heroBannerImg.className = 'sb-hero-banner__img'
  heroBannerImg.src = imgSrc

  const heroBannerText = document.createElement('div')
  heroBannerText.className = 'sb-hero-banner__text'

  const titleElement = document.createElement('h1')
  titleElement.className = 'sb-title'
  titleElement.innerText = title

  const subtitleElement = document.createElement('p')
  subtitleElement.className = 'sb-subtitle'
  subtitleElement.innerText = subtitle

  const linkElement = document.createElement('a')
  linkElement.className = 'sb-link'
  linkElement.innerText = linkLabel
  linkElement.href = linkUrl

  heroBannerText.appendChild(subtitleElement)
  heroBannerText.appendChild(titleElement)
  heroBannerText.appendChild(linkElement)
  heroBanner.appendChild(heroBannerImg)
  heroBanner.appendChild(heroBannerText)

  grid.appendChild(heroBanner)

  return grid
}
