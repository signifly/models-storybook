import { createEditorialHeader } from './EditorialHeader'

export default {
  title: 'Components/Editorial Header',
  argTypes: {
    content: { control: 'object' }
  }
}

const Template = ({ label, ...args }) => {
  return createEditorialHeader({ label, ...args })
}

export const EditorialHeader = Template.bind({})
EditorialHeader.args = {
  content: {
    title: `Photographers Tanya and Zhenya Posternak on Seeing a Frame from Two Different Angles`,
    subtitle: `12/7/2022 by Irene Ojo-Felix`,
    social: [],
    img: {
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      imgCaption:
        '<p><a>Re-Edition Magazine A/W 22</a>&nbsp;| Courtesy of Tanya & Zhenya Posternak</p>'
    }
  }
}
