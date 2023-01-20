import { createImage } from './Image'

export default {
  title: 'Components/Image',
  parameters: {
    layout: 'fullscreen'
  }
}

// export const Image = (args) => createImage(args)

const Template = (args) => {
  return createImage(args)
}

export const Image = Template.bind({})
Image.args = {
  src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
}
