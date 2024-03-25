import { createHeaderAvatarButton } from './HeaderAvatarButton'

export default {
  title: 'Header/Avatar Button',
  argTypes: {
    image: { control: 'text' },
    initials: { control: 'text' },
    opened: { control: 'boolean' },
    notification: { control: 'boolean' }
  }
}

const Template = ({ image, initials, opened, notification, ...args }) => {
  return createHeaderAvatarButton({ image, initials, opened, notification, ...args })
}

export const Image = Template.bind({})
Image.args = {
  image: 'https://images.unsplash.com/photo-1517816428104-797678c7cf0c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  opened: false,
  notification: false
}

export const Initials = Template.bind({})
Initials.args = {
  initials: 'SN',
  opened: false,
  notification: false
}

export const Closed = Template.bind({})
Closed.args = {
  initials: 'SN',
  opened: false,
  notification: false
}

export const Opened = Template.bind({})
Opened.args = {
  initials: 'SN',
  opened: true,
  notification: false
}

export const Notification = Template.bind({})
Notification.args = {
  initials: 'SN',
  opened: false,
  notification: true
}
