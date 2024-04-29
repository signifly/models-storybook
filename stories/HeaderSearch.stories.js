import { createHeaderSearch } from './HeaderSearch'

export default {
  title: 'Header/Search',
  argTypes: {
    placeholder: { control: 'text' },
    focused: { control: { type: 'boolean' } },
    hovered: { control: { type: 'boolean' } }
  }
}

const Template = ({ placeholder, focused, hovered, ...args }) => {
  return createHeaderSearch({ placeholder, focused, hovered, ...args })
}

export const Search = Template.bind({})
Search.args = {
  placeholder: 'search by name or role'
}
