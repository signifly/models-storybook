import { createPopUp } from './PopUp'

export default {
  title: 'Components/PopUp',
  argTypes: {
    fixed: { control: 'boolean' },
    content: { control: 'object' }
  }
}

const Template = ({ label, ...args }) => {
  return createPopUp({ label, ...args })
}

export const PopUp = Template.bind({})
PopUp.args = {
  fixed: true,
  content: {}
}
