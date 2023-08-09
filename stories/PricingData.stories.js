import { createPricingData } from './PricingData'

export default {
  title: 'Components/PricingData',
  argTypes: {
    title: { control: 'text' },
    data: { control: 'object' }
  }
}

const Template = ({ label, ...args }) => {
  return createPricingData({ label, ...args })
}

export const PricingData = Template.bind({})
PricingData.args = {
  title: `Join an exceptional community of fashion professionals.`,
  data: [
    {
      name: 'Talent Agencies',
      number: '700+'
    },
    {
      name: 'Brands & Magazines, Professionals',
      number: '3,400+'
    },
    {
      name: 'Accredited Models & Artists',
      number: '27,000+'
    },
    {
      name: 'Monthly Visitors',
      number: '1.1m'
    },
    {
      name: 'Social Followers',
      number: '2m+'
    }
  ]
}
