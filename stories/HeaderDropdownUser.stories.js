import { createHeaderDropdownUser } from './HeaderDropdownUser'

export default {
  title: 'Header/Dropdown/User',
  argTypes: {
    image: { control: 'text' },
    initials: { control: 'text' },
    name: { control: 'text' },
    subtitle: { control: 'text' },
    url: { control: 'text' },
    onClick: { action: 'onClick' }
  }
}

const Template = ({ image, initials, name, subtitle, url, onClick, ...args }) => {
  return createHeaderDropdownUser({ image, initials, name, subtitle, url, onClick, ...args })
}

export const DropdownUserImage = Template.bind({})
DropdownUserImage.args = {
  name: 'Test',
  subtitle: 'Agency',
  image:
    'https://images.unsplash.com/photo-1517816428104-797678c7cf0c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  onClick: undefined,
  url: '/'
}

export const DropdownUserInitials = Template.bind({})
DropdownUserInitials.args = {
  name: 'Test',
  subtitle: 'Agency',
  initials: 'SN',
  onClick: undefined
}
