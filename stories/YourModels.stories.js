import { createYourModels } from './YourModels'

export default {
  title: 'Examples/Your Models',
  argTypes: {
    title: { control: 'text' }
  }
}

const Template = ({ label, ...args }) => {
  return createYourModels({ label, ...args })
}

export const YourModels = Template.bind({})
YourModels.args = {
  title: 'Your Models.com',
  cards: [
    {
      size: 'small',
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Work Title',
      subtitle: 'Fashion',
      subtext: 'Work',
      borderRadius: true
    },
    {
      size: 'small',
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Work Title',
      subtitle: 'Fashion',
      subtext: 'Work',
      borderRadius: true
    },
    {
      size: 'small',
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Work Title',
      subtitle: 'Fashion',
      subtext: 'Work',
      borderRadius: true
    },
    {
      size: 'small',
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Work Title',
      subtitle: 'Fashion',
      subtext: 'Work',
      borderRadius: true
    },
    {
      size: 'small',
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Work Title',
      subtitle: 'Fashion',
      subtext: 'Work',
      borderRadius: true
    },
    {
      size: 'small',
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Work Title',
      subtitle: 'Fashion',
      subtext: 'Work',
      borderRadius: true
    },
    {
      size: 'small',
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Work Title',
      subtitle: 'Fashion',
      subtext: 'Work',
      borderRadius: true
    },
    {
      size: 'small',
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Work Title',
      subtitle: 'Fashion',
      subtext: 'Work',
      borderRadius: true
    },
    {
      size: 'small',
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Work Title',
      subtitle: 'Fashion',
      subtext: 'Work',
      borderRadius: true
    },
    {
      size: 'small',
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Work Title',
      subtitle: 'Fashion',
      subtext: 'Work',
      borderRadius: true
    },
  ]
}
