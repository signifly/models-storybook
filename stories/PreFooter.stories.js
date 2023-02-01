import { createPreFooter } from './PreFooter'

export default {
  title: 'Components/PreFooter',
  parameters: {
    layout: 'fullscreen',
    newsletter: { control: 'object' },
    linkGroups: { control: 'object' },
    dark: { control: 'boolean' }
  }
}

export const PreFooter = (args) => createPreFooter(args)

PreFooter.args = {
  newsletter: {
    title: 'Newsletter',
    emailLabel: 'Enter your email',
    submitButton: 'SIGN UP'
  },
  linkGroups: [
    {
      title: 'Support',
      links: [
        {
          label: 'FAQ',
          url: '/'
        },
        {
          label: 'Contact Us',
          url: '/'
        },
        {
          label: 'About Models.com',
          url: '/'
        }
      ]
    },
    {
      title: 'Community',
      links: [
        {
          label: 'FAQ',
          url: '/'
        },
        {
          label: 'Contact Us',
          url: '/'
        },
        {
          label: 'About Models.com',
          url: '/'
        }
      ]
    },
    {
      title: 'Support',
      links: [
        {
          label: 'FAQ',
          url: '/'
        },
        {
          label: 'Contact Us',
          url: '/'
        },
        {
          label: 'About Models.com',
          url: '/'
        }
      ]
    },
    {
      title: 'Community',
      links: [
        {
          label: 'FAQ',
          url: '/'
        },
        {
          label: 'Contact Us',
          url: '/'
        },
        {
          label: 'About Models.com',
          url: '/'
        }
      ]
    }
  ],
  copyright:
    'All content Copyright © MODELS.com, Inc. 2000-2023 or their respective owners where indicated.',
  dark: true
}
