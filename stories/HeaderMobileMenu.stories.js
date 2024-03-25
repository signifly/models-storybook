import { createHeaderMobileMenu } from './HeaderMobileMenu'

export default {
  title: 'Header/Mobile/Menu',
  argTypes: {
    accordions: { control: 'object' },
    buttons: { control: 'object' },
    socialLinks: { control: 'object' },
    footerLinks: { control: 'object' }
  }
}

const Template = ({ accordions, buttons, socialLinks, footerLinks, ...args }) => {
  return createHeaderMobileMenu({ accordions, buttons, socialLinks, footerLinks, ...args })
}

export const Menu = Template.bind({})
Menu.args = {
  accordions: [
    {
      title: 'Test',
      links: [
        {
          label: 'Test 1',
          url: '#'
        },
        {
          label: 'Test 2',
          url: '#'
        },
        {
          label: 'Test 3',
          url: '#'
        }
      ],
      opened: true
    },
    {
      title: 'Test',
      links: [
        {
          label: 'Test 1',
          url: '#'
        },
        {
          label: 'Test 2',
          url: '#'
        },
        {
          label: 'Test 3',
          url: '#'
        }
      ],
      opened: false
    },
    {
      title: 'Test',
      links: [
        {
          label: 'Test 1',
          url: '#'
        },
        {
          label: 'Test 2',
          url: '#'
        },
        {
          label: 'Test 3',
          url: '#'
        }
      ],
      opened: false
    }
  ],
  buttons: [
    {
      primary: true,
      label: 'Log in'
    }
  ],
  socialLinks: [
    {
      logo: 'facebook',
      url: 'https://www.facebook.com'
    },
    {
      logo: 'instagram',
      url: 'https://www.instagram.com'
    },
    {
      logo: 'twitter',
      url: 'https://www.twitter.com'
    },
    {
      logo: 'youtube',
      url: 'https://www.youtube.com'
    }
  ],
  footerLinks: [
    {
      label: 'Test 1',
      url: '#'
    },
    {
      label: 'Test 2',
      url: '#'
    },
    {
      label: 'Test 3',
      url: '#'
    },
    {
      label: 'Test 4',
      url: '#'
    },
    {
      label: 'Test 5',
      url: '#'
    }
  ]
}
