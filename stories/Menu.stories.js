import { createMenu } from './Menu'

export default {
  title: 'Components/Menu',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large']
    }
  }
}

const Template = ({ label, ...args }) => {
  return createMenu({ label, ...args })
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  links: [
    { label: 'Models', url: '/' },
    { label: 'Creatives', url: '/' },
    { label: 'Fashion', url: '/' },
    { label: 'Beauty', url: '/' },
    { label: 'Activism', url: '/' }
  ]
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  links: [
    { label: 'Models', url: '/' },
    { label: 'Creatives', url: '/' },
    { label: 'Fashion', url: '/', selected: true },
    { label: 'Beauty', url: '/' },
    { label: 'Activism', url: '/' }
  ]
}
