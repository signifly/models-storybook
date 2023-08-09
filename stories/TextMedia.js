import { createImage } from './Image'
import { createButton } from './Button'
import { addClasses } from '../utilities/classes-names'

export const createTextMedia = ({
  title,
  mainTitle = false,
  text,
  imgSrc,
  videoSrc,
  buttonLabel,
  onClick,
  reverseOrderMobile = false
}) => {
  const textMedia = document.createElement('div')
  textMedia.addEventListener('click', onClick)
  textMedia.className = addClasses([
    'sb-text-media',
    'sb-grid',
    reverseOrderMobile ? 'sb-text-media--reverse' : ''
  ])

  const textMediaText = document.createElement('div')
  textMediaText.className = 'sb-text-media__text span-4'

  const textMediaMedia = document.createElement('div')
  textMediaMedia.className = 'sb-text-media__media span-8'

  if (title) {
    const titleElement = document.createElement(mainTitle ? 'h1' : 'h2')
    titleElement.className = 'sb-title'
    titleElement.innerText = title
    textMediaText.appendChild(titleElement)
  }

  if (text || buttonLabel) {
    const textElement = document.createElement('div')

    const textPElement = document.createElement('p')
    textPElement.innerText = text
    textElement.appendChild(textPElement)

    const buttonElement = createButton({ primary: true, label: buttonLabel, onClick: onClick })
    textElement.appendChild(buttonElement)

    textMediaText.appendChild(textElement)
  }

  if (imgSrc) {
    textMediaText.className = 'sb-text-media__text span-5'
    textMediaMedia.className = 'sb-text-media__media span-7'
    const textMediaImage = createImage({ imgSrc: imgSrc })
    textMediaImage.className = 'sb-text-media__media--img'
    textMediaMedia.appendChild(textMediaImage)
    textMediaText.className = addClasses([textMediaText.className, ' sb-text-media__text--img'])
  } else if (videoSrc) {
    textMediaText.className = 'sb-text-media__text span-4'
    textMediaMedia.className = 'sb-text-media__media span-8'
    const textMediaVideo = document.createElement('video')
    textMediaVideo.className = 'sb-text-media__media--video'

    const videoSrcElement = document.createElement('source')
    videoSrcElement.src = videoSrc
    textMediaVideo.appendChild(videoSrcElement)

    textMediaMedia.appendChild(textMediaVideo)

    // Video icon
    const videoPlayIconWrapper = document.createElement('div')
    videoPlayIconWrapper.className = 'play-button-icon--wrapper'
    const videoPlayIcon = document.createElement('span')
    videoPlayIcon.className = 'play-button-icon'
    videoPlayIconWrapper.appendChild(videoPlayIcon)
    textMediaMedia.appendChild(videoPlayIconWrapper)

    textMediaText.className = addClasses([textMediaText.className, ' sb-text-media__text--video'])
  }

  textMedia.appendChild(textMediaText)
  textMedia.appendChild(textMediaMedia)

  return textMedia
}
