import { createCta } from './Cta'

export default {
  title: 'Components/CTA',
  argTypes: {
    imgSrc: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    linkLabel: { control: 'text' },
    linkUrl: { control: 'text' },
    buttonLabel: { control: 'text' },
    onClick: { action: 'onClick' }
  }
}

const Template = ({ label, ...args }) => {
  return createCta({ label, ...args })
}

export const SimpleCTA = Template.bind({})
SimpleCTA.args = {
  imgSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  title: 'Rankings',
  linkLabel: 'SEE RANKINGS',
  linkUrl: '/',
  subtitle: 'Excepteur sint occaecat non proident in culpa qui officia deserunt.',
  simple: true
}

export const CTA = Template.bind({})
CTA.args = {
  imgSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  title: 'Title',
  buttonLabel: 'SEE ALL',
  simple: false
}
