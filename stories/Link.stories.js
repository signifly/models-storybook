import { createLink } from './Link'

export default {
  title: 'Components/Link',
  argTypes: {
    label: { control: 'text' },
    url: { control: 'text' },
    newTab: { control: 'boolean' }
  }
}

const Template = ({ label, ...args }) => {
  return createLink({ label, ...args })
}

export const Link = Template.bind({})
Link.args = {
  label: 'Link',
  url: '/',
  newTab: true
}
