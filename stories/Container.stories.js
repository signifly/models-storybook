import { createContainer } from './Container'

export default {
  title: 'Components/Container',
  argTypes: {
    title: { control: 'text' },
    linkLabel: { control: 'text' },
    linkUrl: { control: 'text' }
  }
}

const Template = ({ label, ...args }) => {
  return createContainer({ label, ...args })
}

export const Container = Template.bind({})
Container.args = {
  title: 'Title',
  linkLabel: 'Test',
  linkUrl: '/'
}
