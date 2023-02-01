import { createImage } from './Image'
import { createButton } from './Button'
import { addClasses } from '../utilities/classes-names'

export const createCta = ({ title, buttonLabel, onClick, imgSrc }) => {
  const cta = document.createElement('div')
  cta.className = 'cta'
  cta.addEventListener('click', onClick)
  cta.className = addClasses(['cta'])

  const ctaText = document.createElement('div')
  ctaText.className = 'cta__text'

  const titleElement = document.createElement('h6')
  titleElement.className = 'title'
  titleElement.innerText = title

  const buttonLabelElement = createButton({ size: 'small', label: buttonLabel, onClick: () => {} })

  ctaText.appendChild(titleElement)
  ctaText.appendChild(buttonLabelElement)
  cta.appendChild(ctaText)

  const ctaImage = createImage({ src: imgSrc })
  ctaImage.className = 'cta__img'
  cta.appendChild(ctaImage)

  return cta
}
