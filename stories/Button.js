import { addClasses } from '../utilities/classes-names'

export const createButton = ({ primary = false, label, onClick }) => {
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.innerText = label
  btn.addEventListener('click', onClick)

  btn.className = addClasses(['sb-button', primary ? 'sb-button--primary' : 'sb-button--secondary'])

  return btn
}
