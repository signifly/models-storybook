import { createHeaderAccordion } from './HeaderAccordion'

export default {
  title: 'Header/Accordion',
  argTypes: {
    title: { control: 'text' },
    links: { control: 'object' },
    opened: { control: 'boolean' }
  }
}

const Template = ({ title, links, opened, ...args }) => {
  return createHeaderAccordion({ title, links, opened, ...args })
}

export const Opened = Template.bind({})
Opened.args = {
  title: 'Test',
  links: [
    {
      label: 'Test 1',
      url: '#'
    },
    {
      label: 'Test 2',
      url: '#'
    },
    {
      label: 'Test 3',
      url: '#'
    }
  ],
  opened: true
}

export const Closed = Template.bind({})
Closed.args = {
  title: 'Test',
  links: [
    {
      label: 'Test 1',
      url: '#'
    },
    {
      label: 'Test 2',
      url: '#'
    },
    {
      label: 'Test 3',
      url: '#'
    }
  ],
  opened: false
}
