import { createArticleCard } from './ArticleCard'

export const createArticleGrid = ({ cards = [] }) => {
  const grid = document.createElement('div')
  grid.className = 'sb-grid'

  if (cards && cards.length) {
    cards.forEach((card) => {
      let cardElement = createArticleCard(card)
      grid.appendChild(cardElement)
    })
  }

  return grid
}
