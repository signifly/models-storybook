import { addClasses } from '../utilities/classes-names'
import { createSection } from './Section'

export const createGrid = ({ columns = 12 }) => {
  const section = createSection({ title: `${columns}-columns Grid Examples` })
  const grid = document.createElement('div')
  grid.className = addClasses([
    'sb-grid',
    columns === 5 ? 'sb-grid--5' : '',
    columns === 6 ? 'sb-grid--6' : ''
  ])

  const title1 = document.createElement('div')
  title1.className = addClasses(['sb-flex', 'sb-center', 'span-full'])
  title1.style.padding = '10px'
  title1.innerText = 'Normal (No Breakpoints)'
  grid.appendChild(title1)

  const numberArray = [...Array(columns).keys()]
  numberArray.forEach((number) => {
    const span1 = document.createElement('div')
    span1.className = addClasses(['sb-flex', 'sb-center', 'span-1'])
    span1.style.backgroundColor = 'lightgray'
    span1.style.padding = '10px'
    span1.innerText = 'span-1'
    grid.appendChild(span1)
  })

  const spanFull = document.createElement('div')
  spanFull.className = addClasses(['sb-flex', 'sb-center', 'span-full'])
  spanFull.style.backgroundColor = 'lightgray'
  spanFull.style.padding = '10px'
  spanFull.innerText = 'span-full'
  grid.appendChild(spanFull)

  const span1 = document.createElement('div')
  span1.className = addClasses(['sb-flex', 'sb-center', 'span-1'])
  span1.style.backgroundColor = 'lightgray'
  span1.style.padding = '10px'
  span1.innerText = 'span-1'
  grid.appendChild(span1)

  const span2 = document.createElement('div')
  span2.className = addClasses(['sb-flex', 'sb-center', 'span-2'])
  span2.style.backgroundColor = 'lightgray'
  span2.style.padding = '10px'
  span2.innerText = 'span-2'
  grid.appendChild(span2)

  const span3 = document.createElement('div')
  span3.className = addClasses(['sb-flex', 'sb-center', 'span-3'])
  span3.style.backgroundColor = 'lightgray'
  span3.style.padding = '10px'
  span3.innerText = 'span-3'
  grid.appendChild(span3)

  if (columns === 12) {
    const span6 = document.createElement('div')
    span6.className = addClasses(['sb-flex', 'sb-center', 'span-6'])
    span6.style.backgroundColor = 'lightgray'
    span6.style.padding = '10px'
    span6.innerText = 'span-6'
    grid.appendChild(span6)
  }

  const span1Start3 = document.createElement('div')
  span1Start3.className = addClasses(['sb-flex', 'sb-center', 'span-1', 'start-3'])
  span1Start3.style.backgroundColor = 'lightgray'
  span1Start3.style.padding = '10px'
  span1Start3.innerText = 'span-1 start-3'
  grid.appendChild(span1Start3)

  if (columns === 12) {
    const span3Start7 = document.createElement('div')
    span3Start7.className = addClasses(['sb-flex', 'sb-center', 'span-3', 'start-7'])
    span3Start7.style.backgroundColor = 'lightgray'
    span3Start7.style.padding = '10px'
    span3Start7.innerText = 'span-3 start-7'
    grid.appendChild(span3Start7)
  }

  const title2 = document.createElement('div')
  title2.className = addClasses(['sb-flex', 'sb-center', 'span-full'])
  title2.style.padding = '10px'
  title2.innerText = 'Responsive (Breakpoints)'
  grid.appendChild(title2)

  const spanBreakpoints1 = document.createElement('div')
  spanBreakpoints1.className = addClasses([
    'sb-flex',
    'sb-center',
    'start-1',
    'span-2',
    'lg-span-3',
    columns === 12 ? 'md-span-6' : '',
    'sm-span-full'
  ])
  spanBreakpoints1.style.backgroundColor = 'lightgray'
  spanBreakpoints1.style.padding = '10px'
  spanBreakpoints1.innerText = `span-2 lg-span-3 ${columns === 12 ? 'md-span-6' : ''} sm-span-full`
  grid.appendChild(spanBreakpoints1)

  const spanBreakpoints2 = document.createElement('div')
  spanBreakpoints2.className = addClasses([
    'sb-flex',
    'sb-center',
    'start-1',
    columns === 12 ? 'span-6' : 'span-2',
    'sm-span-full'
  ])
  spanBreakpoints2.style.backgroundColor = 'lightgray'
  spanBreakpoints2.style.padding = '10px'
  spanBreakpoints2.innerText = `${columns === 12 ? 'span-6' : 'span-2'} sm-span-full`
  grid.appendChild(spanBreakpoints2)

  const spanBreakpoints3 = document.createElement('div')
  spanBreakpoints3.className = addClasses([
    'sb-flex',
    'sb-center',
    columns === 12 ? 'span-6' : 'span-3',
    'sm-span-full'
  ])
  spanBreakpoints3.style.backgroundColor = 'lightgray'
  spanBreakpoints3.style.padding = '10px'
  spanBreakpoints3.innerText = `${columns === 12 ? 'span-6' : 'span-3'} sm-span-full`
  grid.appendChild(spanBreakpoints3)

  const spanBreakpoints4 = document.createElement('div')
  spanBreakpoints4.className = addClasses([
    'sb-flex',
    'sb-center',
    'start-1',
    columns === 12 ? 'span-6' : 'span-3',
    'md-span-full'
  ])
  spanBreakpoints4.style.backgroundColor = 'lightgray'
  spanBreakpoints4.style.padding = '10px'
  spanBreakpoints4.innerText = `${columns === 12 ? 'span-6' : 'span-3'} md-span-full`
  grid.appendChild(spanBreakpoints4)

  const spanBreakpoints5 = document.createElement('div')
  spanBreakpoints5.className = addClasses([
    'sb-flex',
    'sb-center',
    columns === 12 ? 'span-6' : 'span-2',
    'md-span-full'
  ])
  spanBreakpoints5.style.backgroundColor = 'lightgray'
  spanBreakpoints5.style.padding = '10px'
  spanBreakpoints5.innerText = `${columns === 12 ? 'span-6' : 'span-2'} md-span-full`
  grid.appendChild(spanBreakpoints5)

  section.appendChild(grid)
  return section
}
