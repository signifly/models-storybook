import { createPlanCard } from './PlanCard'

export default {
  title: 'Components/PlanCard',
  argTypes: {
    title: { control: 'text' },
    price: { control: 'text' },
    priceSubtitle: { control: 'text' },
    planSpecs: { control: 'object' },
    buttonLabel: { control: 'text' },
    buttonOnClick: { control: 'text' },
    pro: { control: 'boolean' },
    buttonColor: {
      control: { type: 'select' },
      options: ['pink', 'orange', 'orangered']
    }
  }
}

const Template = ({ ...args }) => {
  return createPlanCard({ ...args })
}

export const PlanCard = Template.bind({})
PlanCard.args = {
  title: 'Starter',
  price: 'Free',
  priceSubtitle: 'Forever',
  planSpecs: [
    'Dorem ipsum dolor sit amet',
    'Worem ipsum dolor',
    'Dorem ipsum dolor sit amet',
    'Worem ipsum dolor'
  ],
  buttonLabel: 'SIGN UP',
  buttonUrl: '#',
  pro: false,
  buttonColor: 'pink'
}
