import { createPricingPage } from './PricingPage'

export default {
  title: 'Examples/PricingPage',
  argTypes: {
    label: { control: 'text' }
  }
}

const Template = ({ ...args }) => {
  return createPricingPage({ ...args })
}

export const PricingPage = Template.bind({})
PricingPage.args = {
  label: 'PricingPage'
}
