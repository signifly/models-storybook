export const createImage = ({ src }) => {
  const image = document.createElement('img')
  image.className = 'image'
  image.src = src

  // const imagewrapper = document.createElement('div');
  // wrapper.className = 'wrapper';

  // footer.appendChild(wrapper);

  return image
}
