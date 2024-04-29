import { createHeaderDropdownSocial } from './HeaderDropdownSocial'

export default {
  title: 'Header/Dropdown/Social',
  argTypes: {
    socialLinks: { control: 'object' },
  }
}

const Template = ({ label, opened, ...args }) => {
  return createHeaderDropdownSocial({ label, opened, ...args })
}

export const DropdownSocial = Template.bind({})
DropdownSocial.args = {
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
