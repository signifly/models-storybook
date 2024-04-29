import { createHeaderDropdownTitle } from './HeaderDropdownTitle'

export default {
  title: 'Header/Dropdown/Title',
  argTypes: {
    title: { control: 'text' },
    status: { control: 'text' }
  }
}

const Template = ({ title, status, ...args }) => {
  return createHeaderDropdownTitle({ title, status,...args })
}

export const Title = Template.bind({})
Title.args = {
  title: 'Title'
}

export const TitlePro = Template.bind({})
TitlePro.args = {
  title: 'Title',
  status: 'pro'
}

export const TitleFree = Template.bind({})
TitleFree.args = {
  title: 'Title',
  status: 'free'
}
