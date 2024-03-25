import { createHeaderLogInButton } from './HeaderLogInButton'

export default {
  title: 'Header/Log In Button',
  argTypes: {
    label: { control: 'text' },
    opened: { control: 'boolean' }
  }
}

const Template = ({ label, opened, ...args }) => {
  return createHeaderLogInButton({ label, opened, ...args })
}

export const Closed = Template.bind({})
Closed.args = {
  opened: false,
  label: 'Log In'
}

export const Opened = Template.bind({})
Opened.args = {
  opened: true,
  label: 'Log In'
}
