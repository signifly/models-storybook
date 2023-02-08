import { createAgenciesPeople } from './AgenciesPeople'

export default {
  title: 'Examples/Agencies People',
  argTypes: {
    title: { control: 'text' },
    buttons: { control: 'object' },
    cards: { control: 'object' },
    mainButton: { control: 'object' },
    onClick: { action: 'onClick' }
  }
}

const Template = ({ label, ...args }) => {
  return createAgenciesPeople({ label, ...args })
}

export const AgenciesPeople = Template.bind({})
AgenciesPeople.args = {
  title: 'Discover<br>Agencies. People.',
  ctaSections: [
    {
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Title',
      buttonLabel: 'SEE ALL',
      simple: false
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Title',
      buttonLabel: 'SEE ALL',
      simple: false
    }
  ],
  profileGrids: [
    {
      title: 'Title',
      linkLabel: 'SHUFFLE',
      profiles: [
        {
          imgSrc:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Title',
          subtitle: 'Subtitle'
        },
        {
          imgSrc:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Title',
          subtitle: 'Subtitle'
        },
        {
          imgSrc:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Title',
          subtitle: 'Subtitle'
        },
        {
          imgSrc:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Title',
          subtitle: 'Subtitle'
        },
        {
          imgSrc:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Title',
          subtitle: 'Subtitle'
        },
        {
          imgSrc:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Title',
          subtitle: 'Subtitle'
        }
      ],
      buttonLabel: 'SEE ALL MODELS'
    },
    {
      title: 'Title',
      linkLabel: 'SHUFFLE',
      profiles: [
        {
          imgSrc:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Title',
          subtitle: 'Subtitle'
        },
        {
          imgSrc:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Title',
          subtitle: 'Subtitle'
        },
        {
          imgSrc:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Title',
          subtitle: 'Subtitle'
        },
        {
          imgSrc:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Title',
          subtitle: 'Subtitle'
        },
        {
          imgSrc:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Title',
          subtitle: 'Subtitle'
        },
        {
          imgSrc:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
          title: 'Title',
          subtitle: 'Subtitle'
        }
      ],
      buttonLabel: 'SEE ALL MODELS'
    }
  ],
  simpleCtaSections: [
    {
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Rankings',
      linkLabel: 'SEE RANKINGS',
      linkUrl: '/',
      subtitle: 'Excepteur sint occaecat non proident in culpa qui officia deserunt.',
      simple: true
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      title: 'Rankings',
      linkLabel: 'SEE RANKINGS',
      linkUrl: '/',
      subtitle: 'Excepteur sint occaecat non proident in culpa qui officia deserunt.',
      simple: true
    }
  ],
  mainButton: {
    label: 'Button',
    onClick: () => {}
  }
}
