import { createEditorialHeader } from './EditorialHeader'

export default {
  title: 'Components/Editorial Header',
  argTypes: {
    title: { control: 'text' }
  }
}

const Template = ({ label, ...args }) => {
  return createEditorialHeader({ label, ...args })
}

export const EditorialHeader = Template.bind({})
EditorialHeader.args = {
  title: 'Title'
}
