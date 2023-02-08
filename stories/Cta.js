import { createImage } from './Image'
import { createButton } from './Button'
import { addClasses } from '../utilities/classes-names'
import { createLink } from './Link'

export const createCta = ({
  simple = true,
  title,
  subtitle,
  buttonLabel,
  linkLabel,
  linkUrl,
  onClick,
  imgSrc
}) => {
  const cta = document.createElement('div')
  cta.addEventListener('click', onClick)
  cta.className = addClasses(['sb-cta', simple ? 'sb-cta--simple' : ''])

  const ctaImage = createImage({ imgSrc: imgSrc })
  ctaImage.className = 'sb-cta__img'

  const ctaText = document.createElement('div')
  ctaText.className = 'sb-cta__text'

  if (title) {
    const titleElement = document.createElement('h6')
    titleElement.className = 'sb-title'
    titleElement.innerText = title
    ctaText.appendChild(titleElement)
  }

  if (subtitle) {
    const subtitleElement = document.createElement('p')
    subtitleElement.className = 'sb-subtitle'
    subtitleElement.innerText = subtitle
    ctaText.appendChild(subtitleElement)
  }

  if (linkLabel) {
    const linkElement = createLink({ label: linkLabel, url: linkUrl })
    ctaText.appendChild(linkElement)
  }

  if (buttonLabel) {
    const buttonLabelElement = createButton({ label: buttonLabel, onClick: onClick })
    ctaText.appendChild(buttonLabelElement)
  }

  if (simple) {
    cta.appendChild(ctaImage)
    cta.appendChild(ctaText)
  } else {
    cta.appendChild(ctaText)
    cta.appendChild(ctaImage)
  }

  return cta
}
