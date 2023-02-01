import { addClasses } from '../utilities/classes-names'

export const createButton = ({ primary = false, backgroundColor, label, onClick }) => {
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.innerText = label
  btn.addEventListener('click', onClick)

  btn.className = addClasses(['button', primary ? 'button--primary' : 'button--secondary'])

  btn.style.backgroundColor = backgroundColor

  return btn
}
