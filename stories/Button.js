import { addClasses } from '../utilities/classes-names'

export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  dark,
  label,
  onClick
}) => {
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.innerText = label
  btn.addEventListener('click', onClick)

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  btn.className = addClasses([
    'storybook-button',
    `storybook-button--${size}`,
    dark ? 'storybook-button--dark' : 'storybook-button--light',
    mode
  ])

  btn.style.backgroundColor = backgroundColor

  return btn
}
