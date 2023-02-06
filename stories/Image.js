export const createImage = ({ src }) => {
  const image = document.createElement('img')
  image.className = 'sb-image'
  image.src = src
  return image
}
