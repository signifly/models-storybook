export const createImage = ({ imgSrc, imgCaption }) => {
  const imageWrapper = document.createElement('div')
  imageWrapper.className = 'sb-image'
  const image = document.createElement('img')
  image.src = imgSrc
  image.className = 'sb-image__img'
  imageWrapper.appendChild(image)
  if (imgCaption) {
    const imageText = document.createElement('div')
    imageText.className = 'sb-image__text'
    imageText.innerHTML = imgCaption
    imageWrapper.appendChild(imageText)
  }
  return imageWrapper
}
