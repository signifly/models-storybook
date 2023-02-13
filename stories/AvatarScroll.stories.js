import { createAvatarScroll } from './AvatarScroll'

export default {
  title: 'Components/AvatarScroll',
  argTypes: {
    title: { control: 'text' }
  }
}

const Template = ({ label, ...args }) => {
  return createAvatarScroll({ label, ...args })
}

export const AvatarScroll = Template.bind({})
AvatarScroll.args = {
  title: 'Tagged People',
  avatars: [
    {
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Title',
      subtitle: 'Subtitle'
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Title',
      subtitle: 'Subtitle'
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Title',
      subtitle: 'Subtitle'
    }
  ]
}
