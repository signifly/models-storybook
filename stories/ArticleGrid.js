import { addClasses } from '../utilities/classes-names'
import { createArticleCard } from './ArticleCard'

export const createArticleGrid = ({ cards = [], halfGrid = false }) => {
  const grid = document.createElement('div')
  grid.className = halfGrid ? 'sb-grid sb-grid--6' : 'sb-grid'

  if (cards && cards.length) {
    cards.forEach((card) => {
      if (card.line) {
        const articleLine = document.createElement('div')
        articleLine.className = 'sb-article-line'
        grid.appendChild(articleLine)
      } else {
        let cardElement = createArticleCard({ ...card, halfGrid: halfGrid })
        grid.appendChild(cardElement)
      }
    })
  }

  return grid
}
