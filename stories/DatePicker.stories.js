import { createDatePicker } from './DatePicker'

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/DatePicker'
}

const Template = ({ label, ...args }) => {
  return createDatePicker({ label, ...args })
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Birthday'
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button'
// }
