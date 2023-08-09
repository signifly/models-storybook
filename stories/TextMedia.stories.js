import { createTextMedia } from './TextMedia'

export default {
  title: 'Components/TextMedia',
  argTypes: {
    title: { control: 'text' },
    mainTitle: { control: 'boolean' },
    text: { control: 'text' },
    imgSrc: { control: 'text' },
    videoSrc: { control: 'text' },
    buttonLabel: { control: 'text' },
    onClick: { action: 'onClick' },
    reverseOrderMobile: { control: 'boolean' }
  }
}

const Template = ({ ...args }) => {
  return createTextMedia({ ...args })
}

export const TextMediaVideo = Template.bind({})
TextMediaVideo.args = {
  title: 'Fashion like a Pro',
  mainTitle: true,
  text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.',
  buttonLabel: 'Test',
  videoSrc:
    'https://wedistill.io/uploads/videos/processed/33/Cold2520Winter2520Dream-HD3_1.mp4.mp4',
  onClick: () => {}
}

export const TextMediaImage = Template.bind({})
TextMediaImage.args = {
  title: 'Fashion like a Pro',
  text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.',
  buttonLabel: 'Test',
  imgSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  onClick: () => {},
  reverseOrderMobile: true
}
