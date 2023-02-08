import { createSocialLink } from './SocialLink'

export default {
  title: 'Components/Social Link',
  argTypes: {
    url: { control: 'text' },
    logo: { control: 'text' },
    color: { control: 'color' }
  }
}

const Template = ({ label, ...args }) => {
  return createSocialLink({ label, ...args })
}

export const SocialLink = Template.bind({})
SocialLink.args = {
  url: '/',
  logo: 'facebook',
  color: '#111111'
}
