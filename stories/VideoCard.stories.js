import { createVideoCard } from './VideoCard'

export default {
  title: 'Components/Video Card',
  argTypes: {
    title: { control: 'text' },
    active: { control: 'boolean' },
    videoSrc: { control: 'text' },
    videoProgress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    onTaggedClick: { action: 'onClick' },
    onVideoClick: { action: 'onClick' },
    tagged: { control: 'object' }
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
  title: 'Title',
  tagged: [
    {
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
    }
  ]
}

export const Inactive = Template.bind({})
Inactive.args = {
  active: false,
  videoSrc:
    'https://wedistill.io/uploads/videos/processed/33/Cold2520Winter2520Dream-HD3_1.mp4.mp4',
  videoProgress: 50,
  title: 'Title'
}
