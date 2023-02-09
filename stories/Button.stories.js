import { createButton } from './Button'

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
    primary: { control: 'boolean' },
    dark: { control: 'boolean' },
  }
}

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args })
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}
