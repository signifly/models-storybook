import { createPagination } from './Pagination'

export default {
  title: 'Components/Pagination',
  argTypes: {
    data: { control: 'object' }
  }
}

const Template = ({ label, ...args }) => {
  return createPagination({ label, ...args })
}

export const Pagination = Template.bind({})
Pagination.args = {
  data: {
    current: 1,
    last: 64
  }
}
