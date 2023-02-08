import { createPreFooter } from './PreFooter'

export default {
  title: 'Components/PreFooter',
  parameters: {
    layout: 'fullscreen',
    newsletter: { control: 'object' },
    socialLinks: { control: 'object' },
    linkGroups: { control: 'object' },
    dark: { control: 'boolean' },
    onClick: { action: 'onClick' }
  }
}

export const Dark = (args) => createPreFooter(args)

Dark.args = {
  newsletter: {
    title: 'Newsletter',
    emailLabel: 'Enter your email',
    submitButton: 'SIGN UP'
  },
  socialLinks: [
    {
      url: '/',
      logo: 'instagram',
      color: 'white'
    },
    {
      url: '/',
      logo: 'facebook',
      color: 'white'
    },
    {
      url: '/',
      logo: 'twitter',
      color: 'white'
    },
    {
      url: '/',
      logo: 'youtube',
      color: 'white'
    },
    {
      url: '/',
      logo: 'tiktok',
      color: 'white'
    }
  ],
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

export const Light = (args) => createPreFooter(args)

Light.args = {
  newsletter: {
    title: 'Newsletter',
    emailLabel: 'Enter your email',
    submitButton: 'SIGN UP'
  },
  socialLinks: [
    {
      url: '/',
      logo: 'instagram'
    },
    {
      url: '/',
      logo: 'facebook'
    },
    {
      url: '/',
      logo: 'twitter'
    },
    {
      url: '/',
      logo: 'youtube'
    },
    {
      url: '/',
      logo: 'tiktok'
    }
  ],
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
  dark: false
}
