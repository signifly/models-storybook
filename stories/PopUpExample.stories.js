import { createPopUpExample } from './PopUpExample'

export default {
  title: 'Examples/PopUp',
  argTypes: {
    fixed: { control: 'boolean' },
    height: { control: 'number' },
    width: { control: 'number' },
    closeLabel: { control: 'text' },
    onClick: { action: 'clicked' },
  }
}

const Template = ({ label, ...args }) => {
  return createPopUpExample({ label, ...args })
}

export const PopUp = Template.bind({})
PopUp.args = {
  fixed: true,
  height: 350,
  width: 350
}
