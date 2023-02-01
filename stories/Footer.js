import { addClasses } from '../utilities/classes-names'
import { createButton } from './Button'

export const createFooter = ({ tagline, paragraph, buttons }) => {
  const footer = document.createElement('footer')
  footer.className = 'footer'

  const wrapperTop = document.createElement('div')
  wrapperTop.className = addClasses(['wrapper', 'wrapper--top'])

  const wrapperBottom = document.createElement('div')
  wrapperBottom.className = addClasses(['wrapper', 'wrapper--bottom'])

  const footerTagline = document.createElement('p')
  footerTagline.className = 'footer__tagline'
  footerTagline.innerText = tagline

  const footerParagraph = document.createElement('div')
  footerParagraph.className = 'footer__paragraph'
  footerParagraph.innerText = paragraph

  const footerButtons = document.createElement('div')
  footerButtons.className = 'footer__buttons'

  buttons.forEach((button) => {
    let buttonElement = createButton(button)
    footerButtons.appendChild(buttonElement)
  })

  footerParagraph.appendChild(footerButtons)
  wrapperTop.appendChild(footerTagline)
  wrapperTop.appendChild(footerParagraph)

  const logo = `<div>
  <svg width="211" height="47" viewBox="0 0 211 47" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M48.3423 45.6738H39.587V25.2459C39.587 23.0483 39.0366 21.3125 37.9377 20.0437C37.007 18.9021 35.8226 18.3306 34.3847 18.3306C32.8626 18.3306 31.5506 18.9448 30.4517 20.1711C29.2669 21.5248 28.6751 23.3014 28.6751 25.501V45.6738H19.7298V25.3734C19.7298 23.0891 19.4549 21.4612 18.9053 20.4877C18.1019 19.1782 16.5995 18.5218 14.4016 18.5218C10.7637 18.5218 8.94527 20.7214 8.94527 25.1188V45.6738H0V11.8601H8.43813V15.0959C8.43813 16.3237 8.45852 16.9362 8.50126 16.9362C8.50126 16.8937 8.52214 16.8512 8.56482 16.8088C9.87511 14.7791 11.2077 13.319 12.5611 12.4315C14.084 11.4594 15.9873 10.972 18.271 10.972C20.5553 10.972 22.3842 11.3851 23.759 12.2096C25.1324 13.0343 26.4331 14.441 27.6603 16.428C28.8864 14.6111 30.2078 13.2243 31.625 12.2727C33.0415 11.3213 34.7659 10.8453 36.7956 10.8453C38.9527 10.8453 41.0143 11.3956 42.9812 12.4946C44.948 13.5952 46.3327 15.0226 47.1361 16.7778C47.9397 18.5334 48.3423 20.362 48.3423 22.2644V45.6738Z" fill="white"/>
  <path d="M76.1261 28.8013C76.1261 21.9493 73.4191 18.5236 68.0056 18.5236C62.5497 18.5236 59.8219 21.9493 59.8219 28.8013C59.8219 35.653 62.5497 39.0787 68.0056 39.0787C73.4191 39.0787 76.1261 35.653 76.1261 28.8013ZM85.1973 28.8013C85.1973 34.1725 83.654 38.4746 80.5668 41.711C77.479 44.9457 73.2925 46.5645 68.0056 46.5645C62.6339 46.5645 58.3947 44.9248 55.2858 41.6472C52.1775 38.3703 50.623 34.0884 50.623 28.8013C50.623 23.4714 52.1669 19.1687 55.2539 15.8911C58.3408 12.614 62.5915 10.9738 68.0056 10.9738C73.4191 10.9738 77.6694 12.6451 80.7572 15.9859C83.7166 19.2436 85.1973 23.5136 85.1973 28.8013Z" fill="white"/>
  <path d="M111.143 29.5601C111.143 22.2854 108.627 18.6486 103.593 18.6486C98.5189 18.6486 95.9813 22.1172 95.9813 29.0522C95.9813 32.31 96.7631 34.888 98.3285 36.7923C99.7238 38.484 101.458 39.3296 103.53 39.3296C105.602 39.3296 107.336 38.5051 108.733 36.8556C110.339 35.0368 111.143 32.6055 111.143 29.5601ZM119.708 45.6735H111.016V41.4867H110.89C108.775 44.955 105.667 46.6895 101.565 46.6895C98.6878 46.6895 96.0434 45.8534 93.6336 44.1833C91.2225 42.5125 89.4889 40.3664 88.4314 37.7447C87.3739 35.122 86.8457 32.034 86.8457 28.4806C86.8457 23.6602 87.9444 19.6627 90.1441 16.4918C92.6387 12.8118 96.2129 10.9717 100.866 10.9717C105.01 10.9717 108.267 12.7483 110.635 16.3006H110.762V0.0602684H119.708V45.6735Z" fill="white"/>
  <path d="M144.831 25.5028C144.619 23.2377 143.848 21.4563 142.515 20.1563C141.183 18.8564 139.65 18.2068 137.916 18.2068C136.223 18.2068 134.765 18.8142 133.539 20.0306C132.185 21.3304 131.339 23.1545 131.001 25.5028H144.831ZM153.967 31.1479H130.684C130.895 33.9402 131.783 36.0973 133.349 37.619C134.702 38.888 136.351 39.5213 138.297 39.5213C139.734 39.5213 141.025 39.1835 142.167 38.5072C143.308 37.8313 144.048 36.9213 144.387 35.779H153.522C152.507 39.2046 150.688 41.8595 148.066 43.7409C145.445 45.6236 142.335 46.5645 138.741 46.5645C127.448 46.5645 121.803 40.4093 121.803 28.1025C121.803 22.9014 123.23 18.7455 126.085 15.6365C128.939 12.528 132.945 10.9738 138.107 10.9738C148.679 10.9738 153.967 17.6991 153.967 31.1479Z" fill="white"/>
  <path d="M165.449 45.6738H156.504V0.060585H165.449V45.6738Z" fill="white"/>
  <path d="M199.074 34.888C199.074 37.3001 198.482 39.3936 197.298 41.1701C194.761 44.8488 190.361 46.6895 184.102 46.6895C179.829 46.6895 176.172 45.715 173.127 43.77C169.742 41.5721 168.03 38.6111 167.988 34.888H177.187C177.187 36.5392 177.905 37.8291 179.344 38.7582C180.613 39.5635 182.177 39.9636 184.039 39.9636C185.688 39.9636 187.116 39.6367 188.32 38.9806C189.527 38.3257 190.13 37.4697 190.13 36.412C190.13 35.0156 188.33 33.9172 184.736 33.1135C179.408 31.887 176.046 30.9354 174.65 30.2577C171.054 28.5242 169.257 25.8597 169.257 22.2641C169.257 20.1494 169.764 18.226 170.779 16.4918C171.795 14.7576 173.507 13.3727 175.918 12.3359C178.329 11.2996 180.93 10.7814 183.722 10.7814C187.528 10.7814 190.721 11.6918 193.3 13.51C196.261 15.5396 197.847 18.4169 198.059 22.1366H189.241C188.774 19.1354 186.786 17.6329 183.277 17.6329C181.839 17.6329 180.591 17.9501 179.535 18.5851C178.477 19.2186 177.949 20.0237 177.949 20.9952C177.949 22.2641 179.767 23.3011 183.404 24.1042C188.691 25.2884 192.096 26.2407 193.617 26.9592C197.255 28.7355 199.074 31.3789 199.074 34.888Z" fill="white"/>
  <path d="M210.998 45.5488H201.418V36.2866H210.998V45.5488Z" fill="white"/>
  </svg>
  </div>`

  wrapperBottom.insertAdjacentHTML('afterbegin', logo)

  footer.appendChild(wrapperTop)
  footer.appendChild(wrapperBottom)

  return footer
}
