import { addClasses } from '../utilities/classes-names'

export const createPopUp = ({
  fixed,
  height,
  width,
  content,
  closeLabel = 'CLOSE',
  onClick
}) => {
  const popup = document.createElement('div')
  popup.className = addClasses(['sb-popup', fixed ? 'sb-popup--fixed' : ''])

  popup.addEventListener('click', onClick)

  if (content) {
    const popupWrapper = document.createElement('div')
    popupWrapper.className = addClasses(['sb-popup__wrapper'])

    const popupClose = document.createElement('button')
    popupClose.className = addClasses(['sb-popup__close'])
    popupClose.innerText = closeLabel
    popupClose.addEventListener('click', onClick)
    popupWrapper.appendChild(popupClose)

    popupWrapper.style.setProperty('--set-width', `${width}px`)
    popupWrapper.style.setProperty('--set-height', `${height}px`)
    content.className = addClasses(['sb-popup__content'])
    popupWrapper.appendChild(content)
    popup.appendChild(popupWrapper)
  }

  return popup
}
