import { createFooter } from './Footer'

export default {
  title: 'Components/Footer',
  parameters: {
    layout: 'fullscreen',
    tagline: { control: 'text' },
    paragraph: { control: 'text' },
    buttons: { control: 'object' }
  }
}

export const Footer = (args) => createFooter(args)

Footer.args = {
  tagline: 'Your trusted platform for the entire fashion community.',
  paragraph:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident in culpa qui officia deserunt.',
  buttons: [
    {
      size: 'large',
      label: 'Join'
    },
    {
      size: 'large',
      label: 'Login'
    }
  ]
}
