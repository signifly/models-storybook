import { createHeaderDropdownProCTA } from './HeaderDropdownProCTA'

export default {
  title: 'Header/Dropdown/Pro CTA',
  argTypes: {
    label: { control: 'text' }
  }
}

const Template = ({ label, ...args }) => {
  return createHeaderDropdownProCTA({ label, ...args })
}

export const HeaderDropdownProCTA = Template.bind({})
HeaderDropdownProCTA.args = {
  label: 'Upgrade to'
}
