import { createButtonGroup } from './ButtonGroup'

export default {
  title: 'Components/ButtonGroup',
  argTypes: {
    buttons: { control: 'object' }
  }
}

const Template = ({ label, ...args }) => {
  return createButtonGroup({ label, ...args })
}

export const ButtonGroup = Template.bind({})
ButtonGroup.args = {
  buttons: [
    {
      label: 'Button'
    },
    {
      primary: true,
      label: 'Button'
    },
    {
      label: 'Button'
    }
  ]
}
