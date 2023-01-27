import { createArticleGrid } from './ArticleGrid'

export default {
  title: 'Examples/Article Grid',
  argTypes: {
    cards: { control: 'object' }
  }
}

const Template = ({ label, ...args }) => {
  return createArticleGrid({ label, ...args })
}

export const ArticleGrid = Template.bind({})
ArticleGrid.args = {
  cards: [
    {
      size: 'large',
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Model of the Week: South Sudanese Rookie Migoa Guol Debuted at Saint Laurent',
      subtitle: 'Fashion'
    },
    {
      size: 'large',
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
    },
    {
      size: 'small',
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Model of the Week: South Sudanese Rookie Migoa Guol Debuted at Saint Laurent',
      subtitle: 'Fashion'
    },
    {
      size: 'large',
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
}

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   imgSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
//   title: 'Title',
//   subtitle: 'Subtitle',
// };
