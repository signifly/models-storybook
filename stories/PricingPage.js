import { addClasses } from '../utilities/classes-names'
import { createTextMedia } from './TextMedia'
import { createTable } from './Table'
import { createSection } from './Section'
import { createPlanCard } from './PlanCard'
import { createPricingData } from './PricingData'
import { createContainer } from './Container'

export const createPricingPage = ({ label }) => {
  const pricingPage = createSection({ title: undefined, noPaddingLg: true })
  pricingPage.className = addClasses([pricingPage.className, 'sb-pricing-page'])

  const textMedia = createTextMedia({
    title: 'Fashion like a Pro',
    mainTitle: true,
    text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.',
    buttonLabel: 'Test',
    videoSrc:
      'https://wedistill.io/uploads/videos/processed/33/Cold2520Winter2520Dream-HD3_1.mp4.mp4',
    onClick: () => {}
  })
  pricingPage.appendChild(textMedia)

  const table = createTable()
  pricingPage.appendChild(table)

  const textMedia2 = createTextMedia({
    title: 'Fashion like a Pro',
    text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.',
    buttonLabel: 'Test',
    imgSrc:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    onClick: () => {},
    reverseOrderMobile: true
  })
  pricingPage.appendChild(textMedia2)

  const textMedia3 = createTextMedia({
    title: 'Fashion like a Pro',
    text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.',
    buttonLabel: 'Test',
    imgSrc:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    onClick: () => {},
    reverseOrderMobile: true
  })
  pricingPage.appendChild(textMedia3)

  const pricingData = createPricingData({
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
  })

  pricingPage.appendChild(pricingData)

  // Cards

  const planCards = document.createElement('div')
  planCards.className = addClasses([
    'sb-pricing-page__plan-cards',
    'sb-grid',
    'sb-plan-card-container'
  ])

  const planCardsTitle = document.createElement('h2')
  planCardsTitle.className = addClasses(['sb-title', 'sb-title--center'])
  planCardsTitle.innerText = 'Become a Models Member Today.'
  planCardsTitle.className = addClasses([planCardsTitle.className, 'span-full'])
  planCards.appendChild(planCardsTitle)

  const planCard1 = createPlanCard({
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
  })
  planCard1.className = addClasses([planCard1.className, 'span-4', 'sm-span-full'])
  planCards.appendChild(planCard1)

  const planCard2 = createPlanCard({
    title: 'Starter',
    price: '$16.7 / month',
    priceSubtitle: 'Billed annually or $20 month-to-month',
    planSpecs: [
      'Dorem ipsum dolor sit amet',
      'Worem ipsum dolor',
      'Dorem ipsum dolor sit amet',
      'Worem ipsum dolor'
    ],
    buttonLabel: 'I AM A PRO',
    buttonUrl: '#',
    pro: true,
    buttonColor: 'orange'
  })
  planCard2.className = addClasses([planCard2.className, 'span-4', 'sm-span-full'])
  planCards.appendChild(planCard2)

  const planCard3 = createPlanCard({
    title: 'Starter',
    price: '$17 per user / month',
    priceSubtitle: 'Billed annually',
    planSpecs: [
      'Dorem ipsum dolor sit amet',
      'Worem ipsum dolor',
      'Dorem ipsum dolor sit amet',
      'Worem ipsum dolor'
    ],
    buttonLabel: `LET'S TEAM UP`,
    buttonUrl: '#',
    pro: true,
    buttonColor: 'orangered'
  })
  planCard3.className = addClasses([planCard3.className, 'span-4', 'sm-span-full'])
  planCards.appendChild(planCard3)

  pricingPage.appendChild(planCards)

  return pricingPage
}
