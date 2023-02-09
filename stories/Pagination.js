import { addClasses } from '../utilities/classes-names'
export const createPagination = ({ data }) => {
  const pagination = document.createElement('div')
  pagination.className = 'sb-pagination'

  if (data) {
    const paginationPrev = document.createElement('button')
    paginationPrev.className = addClasses(['sb-pagination__arrow', 'sb-pagination__arrow--prev'])
    const previousArrow = `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.66651 2L1.99984 10L8.6665 18" stroke="#111111" stroke-width="2" stroke-linecap="square"/>
    </svg>
    `
    paginationPrev.insertAdjacentHTML('afterbegin', previousArrow)
    pagination.appendChild(paginationPrev)

    const paginationFirstPage = document.createElement('button')
    paginationFirstPage.className = addClasses([
      'sb-pagination__page',
      data.current === 1 ? 'sb-pagination__page--active' : ''
    ])
    paginationFirstPage.innerText = 1
    pagination.appendChild(paginationFirstPage)

    const paginationDots = document.createElement('span')
    paginationDots.className = 'sb-pagination__dots'
    paginationDots.innerText = '...'
    pagination.appendChild(paginationDots)

    const paginationLastPage = document.createElement('button')
    paginationLastPage.className = addClasses([
      'sb-pagination__page',
      data.current === data.last ? 'sb-pagination__page--active' : ''
    ])
    paginationLastPage.innerText = data.last
    pagination.appendChild(paginationLastPage)

    const paginationNext = document.createElement('button')
    paginationNext.className = addClasses(['sb-pagination__arrow', 'sb-pagination__next--prev'])
    const nextArrow = `<svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.6665 18L8.33317 10L1.6665 2" stroke="#111111" stroke-width="2" stroke-linecap="square"/>
    </svg>
    `
    paginationNext.insertAdjacentHTML('afterbegin', nextArrow)
    pagination.appendChild(paginationNext)
  }
  return pagination
}
