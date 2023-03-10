import { addClasses } from '../utilities/classes-names'

export const createPopUp = ({
  fixed,
  height,
  width,
  title,
  content,
  closeLabel = 'CLOSE',
  onClick
}) => {
  const popup = document.createElement('div')
  popup.className = addClasses(['sb-popup', fixed ? 'sb-popup--fixed' : ''])

  popup.addEventListener('click', onClick)

  if (content) {
    const popupWrapper = document.createElement('div')
    popupWrapper.className = 'sb-popup__wrapper'

    const popupHeader = document.createElement('div')
    popupHeader.className = 'sb-popup__header'
    popupWrapper.appendChild(popupHeader)

    const popupTitle = document.createElement('h1')
    popupTitle.className = 'sb-popup__title'
    popupTitle.innerText = title
    popupHeader.appendChild(popupTitle)

    const popupClose = document.createElement('button')
    popupClose.className = 'sb-popup__close'
    popupClose.innerText = closeLabel
    popupClose.addEventListener('click', onClick)
    popupHeader.appendChild(popupClose)

    popupWrapper.style.setProperty('--set-width', `${width}px`)
    popupWrapper.style.setProperty('--set-height', `${height}px`)
    content.className = 'sb-popup__content'
    popupWrapper.appendChild(content)
    popup.appendChild(popupWrapper)
  }

  return popup
}
