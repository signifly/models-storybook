import { createVideoCard } from './VideoCard'

export default {
  title: 'Components/Video Card',
  argTypes: {
    title: { control: 'text' },
    active: { control: 'boolean' },
    videoSrc: { control: 'text' },
    videoProgress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    onClick: { action: 'onClick' }
  }
}

const Template = ({ label, ...args }) => {
  return createVideoCard({ label, ...args })
}

export const Active = Template.bind({})
Active.args = {
  active: true,
  videoSrc:
    'https://wedistill.io/uploads/videos/processed/33/Cold2520Winter2520Dream-HD3_1.mp4.mp4',
  videoProgress: 50,
  title: 'Title'
}

export const Inactive = Template.bind({})
Inactive.args = {
  active: false,
  videoSrc:
    'https://wedistill.io/uploads/videos/processed/33/Cold2520Winter2520Dream-HD3_1.mp4.mp4',
  videoProgress: 50,
  title: 'Title'
}
