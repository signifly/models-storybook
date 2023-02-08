import { addClasses } from '../utilities/classes-names'
import { createArticleGrid } from './ArticleGrid'
import { createContainer } from './Container'

export const createEditorialFooter = ({ footerGroups = [] }) => {
  const editorialFooter = document.createElement('div')
  editorialFooter.className = addClasses(['sb-editorial-footer', 'sb-grid'])

  if (footerGroups && footerGroups.length) {
    footerGroups.forEach((group) => {
      const groupContainer = createContainer({ title: group.title, headerBorder: true })
      groupContainer.className = addClasses([groupContainer.className, 'span-6'])
      const articles = createArticleGrid({ cards: group.articles })
      articles.className = addClasses([
        articles.className,
        'sb-editorial-footer__articles',
        'sb-grid--6'
      ])
      groupContainer.appendChild(articles)
      editorialFooter.appendChild(groupContainer)
    })
  }

  return editorialFooter
}
