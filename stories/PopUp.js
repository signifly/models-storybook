import { addClasses } from '../utilities/classes-names'

export const createPopUp = ({ fixed, height, width, content }) => {
  const popup = document.createElement('div')
  popup.className = addClasses(['popup', fixed ? 'popup--fixed' : ''])

  popup.addEventListener('onclick', () => {
    console.log('click')
  })

  if (content) {
    const popupWrapper = document.createElement('div')
    popupWrapper.className = addClasses(['popup__wrapper'])
    popupWrapper.style.setProperty('--set-width', `${width}px`)
    popupWrapper.style.setProperty('--set-height', `${height}px`)
    popupWrapper.appendChild(content)
    popup.appendChild(popupWrapper)
  }

  return popup
}
