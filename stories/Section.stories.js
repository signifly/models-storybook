import { createSection } from './Section'

export default {
  title: 'Components/Section',
  argTypes: {
    title: { control: 'text' }
  }
}

const Template = ({ label, ...args }) => {
  return createSection({ label, ...args })
}

export const Section = Template.bind({})
Section.args = {
  title: 'Title'
}
