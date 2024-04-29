import { addClasses } from '../utilities/classes-names'
import { createButton } from './Button'

export const createPlanCard = ({
  title,
  price,
  priceSubtitle,
  planSpecs,
  buttonLabel,
  buttonOnClick,
  buttonColor,
  pro,
  current
}) => {
  const planCard = document.createElement('div')
  planCard.className = addClasses(['sb-plan-card', current ? 'sb-plan-card--current' : ''])

  // Plan Card Info

  const planCardInfo = document.createElement('div')
  planCardInfo.className = addClasses(['sb-plan-card__info'])

  const planCardTitle = document.createElement('h3')
  planCardTitle.className = addClasses([
    'sb-plan-card__title',
    'sb-title',
    pro ? 'sb-title--pro' : ''
  ])
  planCardTitle.innerText = title
  planCardInfo.appendChild(planCardTitle)

  const planCardPrice = document.createElement('p')
  planCardPrice.className = addClasses(['sb-plan-card__price'])
  planCardPrice.innerText = price
  planCardInfo.appendChild(planCardPrice)

  const planCardPriceSubtitle = document.createElement('p')
  planCardPriceSubtitle.className = addClasses(['sb-plan-card__price-subtitle'])
  planCardPriceSubtitle.innerText = priceSubtitle
  planCardInfo.appendChild(planCardPriceSubtitle)

  planSpecs.forEach((spec) => {
    const planCardSpec = document.createElement('div')
    planCardSpec.className = addClasses(['sb-plan-card__spec'])
    const planCardSpecIcon = document.createElement('span')
    planCardSpecIcon.className = addClasses([`check-${buttonColor}`])
    const planCardSpecText = document.createElement('p')
    planCardSpecText.innerText = spec
    planCardSpec.appendChild(planCardSpecIcon)
    planCardSpec.appendChild(planCardSpecText)
    planCardInfo.appendChild(planCardSpec)
  })


  planCard.appendChild(planCardInfo)

  // Plan Card Footer

  const planCardFooter = document.createElement('div')
  planCardFooter.className = addClasses(['sb-plan-card__footer'])

  const planButton = createButton({ label: buttonLabel, onClick: buttonOnClick })
  planButton.className = addClasses([
    planButton.className,
    'sb-plan-card__button',
    current ? '' : `sb-plan-card__button--${buttonColor}`
  ])
  planCardFooter.appendChild(planButton)
  planCard.appendChild(planCardFooter)

  return planCard
}
