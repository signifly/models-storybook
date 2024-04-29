import { createLatestWork } from './LatestWork'

export default {
  title: 'Examples/Latest Work',
  argTypes: {
    title: { control: 'text' },
    buttons: { control: 'object' },
    cards: { control: 'object' },
    mainButton: { control: 'object' }
  }
}

const Template = ({ label, ...args }) => {
  return createLatestWork({ label, ...args })
}

export const LatestWork = Template.bind({})
LatestWork.args = {
  title: 'Discover<br>Latest Work.',
  buttons: [
    {
      label: 'Button',
      onClick: () => {}
    },
    {
      primary: true,
      label: 'Button',
      onClick: () => {}
    },
    {
      label: 'Button',
      onClick: () => {}
    },
    {
      label: 'Button',
      onClick: () => {}
    },
    {
      label: 'Button',
      onClick: () => {}
    },
    {
      label: 'Button',
      onClick: () => {}
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
      borderRadius: true,
      video: true
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
  ],
  mainButton: {
    label: 'Button',
    onClick: () => {}
  }
}
