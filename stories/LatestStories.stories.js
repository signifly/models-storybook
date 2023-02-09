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
      title: 'Work Title',
      active: true,
      videoProgress: 50,
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
        }
      ]
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
    }
  ],
  mainLink: {
    label: 'WATCH IT ON INSTAGRAM',
    url: '/'
  }
}
