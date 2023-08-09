import { createTable } from './Table'

export default {
  title: 'Components/Table',
}

const Template = ({ ...args }) => {
  return createTable({ ...args })
}

export const Table = Template.bind({})
