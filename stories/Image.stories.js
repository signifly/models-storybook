import { createImage } from './Image'

export default {
  title: 'Components/Image',
  parameters: {
    layout: 'fullscreen'
  },
}

export const Image = (args) => createImage(args)
