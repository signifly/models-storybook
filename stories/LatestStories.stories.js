import { createLatestStories } from './LatestStories'

export default {
  title: 'Examples/Latest Stories',
  argTypes: {
    title: { control: 'text' },
    buttons: { control: 'object' },
    cards: { control: 'object' },
    mainButton: { control: 'object' }
  }
}

const Template = ({ label, ...args }) => {
  return createLatestStories({ label, ...args })
}

export const LatestStories = Template.bind({})
LatestStories.args = {
  title: 'Latest Stories',
  buttons: [
    {
      label: 'Button',
      onClick: () => {}
    },
    {
      primary: true,
      label: 'Button',
      onClick: () => {}
    },
    {
      label: 'Button',
      onClick: () => {}
    }
  ],
  cards: [
    {
      videoSrc:
        'https://wedistill.io/uploads/videos/processed/33/Cold2520Winter2520Dream-HD3_1.mp4.mp4',
      title: 'Work Title'
    },
    {
      videoSrc:
        'https://wedistill.io/uploads/videos/processed/33/Cold2520Winter2520Dream-HD3_1.mp4.mp4',
      title: 'Work Title'
    },
    {
      videoSrc:
        'https://wedistill.io/uploads/videos/processed/33/Cold2520Winter2520Dream-HD3_1.mp4.mp4',
      title: 'Work Title'
    },
    {
      videoSrc:
        'https://wedistill.io/uploads/videos/processed/33/Cold2520Winter2520Dream-HD3_1.mp4.mp4',
      title: 'Work Title'
    },
    {
      videoSrc:
        'https://wedistill.io/uploads/videos/processed/33/Cold2520Winter2520Dream-HD3_1.mp4.mp4',
      title: 'Work Title'
    },
  ],
  mainLink: {
    label: 'WATCH IT ON INSTAGRAM',
    url: '/'
  }
}
