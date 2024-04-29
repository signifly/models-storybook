import { createHeaderDropdownLink } from './HeaderDropdownLink'

export default {
  title: 'Header/Dropdown/Link',
  argTypes: {
    label: { control: 'text' },
    url: { control: 'text' },
    onClick: { action: 'onClick' },
    submenu: { control: 'object' },
    notifications: { control: 'number' },
    backIcon: { control: 'boolean' }
  }
}

const Template = ({ label, url, onClick, submenu, notifications, backIcon, ...args }) => {
  return createHeaderDropdownLink({ label, url, onClick, submenu, notifications, backIcon, ...args })
}

export const DropdownLink = Template.bind({})
DropdownLink.args = {
  label: 'Test',
  url: '/'
}

export const DropdownLinkWithNotifications = Template.bind({})
DropdownLinkWithNotifications.args = {
  label: 'Test',
  url: '/',
  notifications: 3
}

export const DropdownLinkSubmenu = Template.bind({})
DropdownLinkSubmenu.args = {
  label: 'Test',
  url: '/',
  submenu: {
    is: true,
    notifications: 0
  }
}

export const DropdownLinkSubmenuWithNotifications = Template.bind({})
DropdownLinkSubmenuWithNotifications.args = {
  label: 'Test',
  url: '/',
  submenu: {
    is: true,
    notifications: 3
  }
}

export const DropdownLinkSubmenuBack = Template.bind({})
DropdownLinkSubmenuBack.args = {
  label: 'Test',
  url: '/',
  submenu: {
    is: true,
    notifications: 0
  },
  backIcon: true
}
