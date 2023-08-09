import { addClasses } from '../utilities/classes-names'

export const createPricingData = ({ title, data }) => {
  const pricingData = document.createElement('div')
  pricingData.className = 'sb-pricing-data'

  const pricingDataTitle = document.createElement('h2')
  pricingDataTitle.className = addClasses(['sb-pricing-data__title', 'sb-title'])
  pricingDataTitle.innerText = title
  pricingData.appendChild(pricingDataTitle)

  const pricingDataNumbers = document.createElement('div')
  pricingDataNumbers.className = 'sb-pricing-data__numbers'

  data.forEach((item) => {
    const pricingDataNumbersItem = document.createElement('div')
    pricingDataNumbersItem.className = 'sb-pricing-data__item'
    const pricingDataNumbersItemName = document.createElement('p')
    pricingDataNumbersItemName.className = 'sb-pricing-data__item-name'
    pricingDataNumbersItemName.innerText = item.name
    const pricingDataNumbersItemNumber = document.createElement('p')
    pricingDataNumbersItemNumber.className = 'sb-pricing-data__item-number'
    pricingDataNumbersItemNumber.innerText = item.number
    pricingDataNumbersItem.appendChild(pricingDataNumbersItemName)
    pricingDataNumbersItem.appendChild(pricingDataNumbersItemNumber)
    pricingDataNumbers.appendChild(pricingDataNumbersItem)
  })

  pricingData.appendChild(pricingDataNumbers)

  return pricingData
}
