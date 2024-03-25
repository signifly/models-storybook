import { createHeaderDropdown } from './HeaderDropdown'

export default {
  title: 'Header/Dropdown',
  argTypes: {
    itemGroups: { control: 'object' }
  }
}

const Template = ({ itemGroups, ...args }) => {
  return createHeaderDropdown({ itemGroups, ...args })
}

export const Dropdown = Template.bind({})
Dropdown.args = {
  itemGroups: [
    [
      {
        itemType: 'title',
        title: 'megan@exposureny.com',
        status: 'pro'
      }
    ],
    [{ itemType: 'user', name: 'Test', subtitle: 'Agency', initials: 'SN', url: '#' }],
    [
      {
        itemType: 'link',
        label: 'Test',
        url: ''
      },
      {
        itemType: 'link',
        label: 'Test',
        url: ''
      },
      {
        itemType: 'link',
        label: 'Test',
        url: ''
      }
    ],
    [
      {
        itemType: 'link',
        label: 'Test',
        url: '',
        backIcon: true
      },
      {
        itemType: 'link',
        label: 'Test',
        url: '',
        submenu: {
          is: true,
          notifications: 0
        },
        backIcon: true
      },
      {
        itemType: 'link',
        label: 'Test',
        url: '',
        submenu: {
          is: true,
          notifications: 0
        },
        backIcon: true,
        notifications: 2
      },
      {
        itemType: 'link',
        label: 'Test',
        url: '',
        submenu: {
          is: true,
          notifications: 0
        }
      },
      {
        itemType: 'link',
        label: 'Test',
        url: '',
        submenu: {
          is: true,
          notifications: 3
        }
      },
      {
        itemType: 'link',
        label: 'Test',
        url: '',
        submenu: {
          is: true,
          notifications: 10
        },
        notifications: 3
      },
      {
        itemType: 'link',
        label: 'Test',
        url: '',
        notifications: 1
      },
      {
        itemType: 'link',
        label: 'Test',
        url: '',
        notifications: 10
      }
    ],
    [
      {
        itemType: 'title',
        title: 'Test'
      },
      {
        itemType: 'link',
        label: 'Test',
        url: ''
      },
      {
        itemType: 'link',
        label: 'Test',
        url: ''
      },
      {
        itemType: 'link',
        label: 'Test',
        url: '',
        onClick: () => {}
      },
      {
        itemType: 'pro-cta',
        label: 'Upgrade to',
        url: ''
      }
    ],
    [
      {
        itemType: 'social',
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
        ]
      }
    ]
  ]
}
