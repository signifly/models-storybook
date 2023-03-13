import { createPopUp } from './PopUp'

export default {
  title: 'Components/PopUp',
  argTypes: {
    fixed: { control: 'boolean' },
    height: { control: 'number' },
    width: { control: 'number' },
    title: { control: 'text' },
    content: { control: 'object' },
    onClick: { action: 'clicked' },
  }
}

const Template = ({ label, ...args }) => {
  return createPopUp({ label, ...args })
}

export const PopUp = Template.bind({})
PopUp.args = {
  fixed: true,
  height: 500,
  width: 500,
}
