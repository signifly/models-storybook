import { createMenu } from './Menu'

export default {
  title: 'Components/Menu',
  argTypes: {
    header: { control: 'boolean' }
  }
}

const Template = ({ label, ...args }) => {
  return createMenu({ label, ...args })
}

export const Menu = Template.bind({})
Menu.args = {
  header: false,
  links: [
    { label: 'Models', url: '/' },
    { label: 'Creatives', url: '/' },
    { label: 'Fashion', url: '/' },
    { label: 'Beauty', url: '/' },
    { label: 'Activism', url: '/' }
  ]
}

export const MenuHeader = Template.bind({})
MenuHeader.args = {
  header: true,
  links: [
    { label: 'Models', url: '/' },
    { label: 'Creatives', url: '/' },
    { label: 'Fashion', url: '/', selected: true },
    { label: 'Beauty', url: '/' },
    { label: 'Activism', url: '/' }
  ]
}
