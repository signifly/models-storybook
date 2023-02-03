import { createLatestWork } from './LatestWork'

export default {
  title: 'Examples/Latest Work',
  argTypes: {
    title: { control: 'text' }
  }
}

const Template = ({ label, ...args }) => {
  return createLatestWork({ label, ...args })
}

export const LatestWork = Template.bind({})
LatestWork.args = {
  title: 'Discover<br>Agencies. People.',
  buttons: [
    {
      label: 'Button'
    },
    {
      primary: true,
      label: 'Button'
    },
    {
      label: 'Button'
    }
  ],
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
    }
  ]
}
