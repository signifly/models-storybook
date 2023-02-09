import { createYourModels } from './YourModels'

export default {
  title: 'Examples/Your Models',
  argTypes: {
    loggedIn: { control: 'boolean' },
    title: { control: 'text' },
    cards: { control: 'object' },
    mainButton: { control: 'object' },
    mainText: { control: 'text' }
  }
}

const Template = ({ label, ...args }) => {
  return createYourModels({ label, ...args })
}

export const YourModelsLoggedIn = Template.bind({})
YourModelsLoggedIn.args = {
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
    }
  ],
  loggedIn: true
}

export const YourModelsLoggedOff = Template.bind({})
YourModelsLoggedOff.args = {
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
    }
  ],
  loggedIn: false,
  mainText: 'To see a customized news feed of your favorites',
  mainButton: {
    label: 'SIGN UP / LOGIN',
    onClick: () => {},
    primary: true,
  }
}
