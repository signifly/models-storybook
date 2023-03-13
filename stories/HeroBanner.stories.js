import { createHeroBanner } from './HeroBanner'

export default {
  title: 'Components/HeroBanner',
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    title: { control: 'text' },
    titleLink: { control: 'text' },
    subtitle: { control: 'text' },
    subtitleLink: { control: 'text' },
    imgSrc: { control: 'text' },
    linkLabel: { control: 'text' },
    linkUrl: { control: 'text' },
    borders: { control: 'boolean' }
  }
}

const Template = (args) => {
  return createHeroBanner(args)
}

export const HeroBanner = Template.bind({})
HeroBanner.args = {
  imgSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  title: 'Title',
  titleLink: '/',
  subtitle: 'Subtitle',
  subtitleLink: '/',
  linkLabel: 'SEE MORE',
  linkUrl: '/'
}

export const HeroBannerBorders = Template.bind({})
HeroBannerBorders.args = {
  imgSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  title: 'Title',
  titleLink: '/',
  subtitle: 'Subtitle',
  subtitleLink: '/',
  linkLabel: 'SEE MORE',
  linkUrl: '/',
  borders: true
}
