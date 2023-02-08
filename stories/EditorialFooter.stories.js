import { createEditorialFooter } from './EditorialFooter'

export default {
  title: 'Components/Editorial Footer',
  argTypes: {
    footerGroups: { control: 'object' }
  }
}

const Template = ({ label, ...args }) => {
  return createEditorialFooter({ label, ...args })
}

export const EditorialFooter = Template.bind({})
EditorialFooter.args = {
  footerGroups: [
    {
      title: 'Popular in News',
      articles: [
        {
          size: 'small',
          imgSrc:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Model of the Week: South Sudanese Rookie Migoa Guol Debuted at Saint Laurent',
          subtitle: 'Fashion'
        },
        {
          size: 'small',
          imgSrc:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Model of the Week: South Sudanese Rookie Migoa Guol Debuted at Saint Laurent',
          subtitle: 'Fashion'
        }
      ]
    },
    {
      title: 'Next',
      articles: [
        {
          size: 'small',
          largeSpan: true,
          imgSrc:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Model of the Week: South Sudanese Rookie Migoa Guol Debuted at Saint Laurent',
          subtitle: 'Fashion'
        }
      ]
    }
  ]
}
