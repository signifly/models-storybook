import { createHeaderMobile } from './HeaderMobile'

export default {
  title: 'Header/Mobile/Example',
  argTypes: {
    menuOpened: { control: 'boolean' },
    avatarOpened: { control: 'boolean' },
    menuDropdownData: { control: 'object' },
    avatarDropdownData: { control: 'object' }
  }
}

const Template = ({ menuOpened, avatarOpened, menuDropdownData, avatarDropdownData, ...args }) => {
  return createHeaderMobile({
    menuOpened,
    avatarOpened,
    menuDropdownData,
    avatarDropdownData,
    ...args
  })
}

export const Example = Template.bind({})
Example.args = {
  menuOpened: false,
  avatarOpened: false,
  menuDropdownData: {
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
    ],
    buttons: [
      {
        primary: true,
        label: 'Join'
      },
      {
        primary: false,
        label: 'Login'
      }
    ]
  },
  avatarDropdownData: {
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
}

export const OpenMenu = Template.bind({})
OpenMenu.args = {
  menuOpened: true,
  avatarOpened: false,
  menuDropdownData: {
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
    ],
    buttons: [
      {
        primary: true,
        label: 'Join'
      },
      {
        primary: false,
        label: 'Login'
      }
    ]
  },
  avatarDropdownData: {
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
}

export const OpenAvatar = Template.bind({})
OpenAvatar.args = {
  menuOpened: false,
  avatarOpened: true,
  menuDropdownData: {
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
    ],
    buttons: [
      {
        primary: true,
        label: 'Join'
      },
      {
        primary: false,
        label: 'Login'
      }
    ]
  },
  avatarDropdownData: {
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
}
