import { createGrid } from './Grid'

export default {
  title: 'Components/Grid',
  argTypes: {
    columns: {
      control: { type: 'select' },
      options: [12, 5, 6]
    }
  }
}

const Template = ({ label, ...args }) => {
  return createGrid({ label, ...args })
}

export const Grid12 = Template.bind({})
Grid12.args = {
  columns: 12
}

export const Grid5 = Template.bind({})
Grid5.args = {
  columns: 5
}

export const Grid6 = Template.bind({})
Grid6.args = {
  columns: 6
}
