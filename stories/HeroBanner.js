export const createHeroBanner = ({ imgSrc, title, subtitle, linkLabel, linkUrl }) => {
  const grid = document.createElement('div')
  grid.className = 'grid'

  const heroBanner = document.createElement('div')
  heroBanner.className = 'hero-banner span-full'

  const heroBannerImg = document.createElement('img')
  heroBannerImg.className = 'hero-banner__img'
  heroBannerImg.src = imgSrc

  const heroBannerText = document.createElement('div')
  heroBannerText.className = 'hero-banner__text'

  const titleElement = document.createElement('h1')
  titleElement.className = 'title'
  titleElement.innerText = title

  const subtitleElement = document.createElement('p')
  subtitleElement.className = 'subtitle'
  subtitleElement.innerText = subtitle

  const linkElement = document.createElement('a')
  linkElement.className = 'link'
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
