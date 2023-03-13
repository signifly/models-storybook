import { createAvatar } from './Avatar'

export default {
  title: 'Components/Avatar',
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    imgSrc: { control: 'text' },
    href: { control: 'text' },
    onClick: { action: 'onClick' }
  }
}

const Template = ({ label, ...args }) => {
  return createAvatar({ label, ...args })
}

export const Image = Template.bind({})
Image.args = {
  imgSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  title: 'Title',
  subtitle: 'Subtitle',
  href: '/'
}

export const Initials = Template.bind({})
Initials.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  initials: 'AB',
  href: '/'
}
