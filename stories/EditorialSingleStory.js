import { addClasses } from '../utilities/classes-names'
import { createImage } from './Image'
import { createEditorialHeader } from './EditorialHeader'
import { createEditorialTagged } from './EditorialTagged'
import { createEditorialFooter } from './EditorialFooter'

export const createEditorialSingleStory = ({ header, segments, tagged, footer }) => {
  const editorialSingleStory = document.createElement('div')
  editorialSingleStory.className = addClasses(['sb-editorial', 'sb-grid'])

  if (header) {
    const editorialHeader = createEditorialHeader({ content: header })
    editorialHeader.className = addClasses([
      editorialHeader.className,
      'sb-editorial__header',
      header.img ? 'span-full' : 'span-8 start-3'
    ])
    editorialSingleStory.appendChild(editorialHeader)
  }

  if (segments && segments.length) {
    segments.forEach((segment) => {
      if (segment.type === 'text') {
        const editorialText = document.createElement('div')
        editorialText.className = addClasses([
          'sb-editorial__segment',
          'sb-editorial__segment--text',
          'span-8',
          'start-3'
        ])
        editorialText.innerHTML = segment.content
        editorialSingleStory.appendChild(editorialText)
      }

      if (segment.type === 'image') {
        const editorialImage = createImage(segment.content)
        editorialImage.className = addClasses([
          editorialImage.className,
          'sb-editorial__segment',
          'sb-editorial__segment--img',
          segment.span ? `span-${segment.span}` : 'span-full start-1'
        ])
        editorialSingleStory.appendChild(editorialImage)
      }
    })
  }

  if (tagged) {
    const editorialTagged = createEditorialTagged({ ...tagged })
    editorialTagged.className = addClasses([
      editorialTagged.className,
      'sb-editorial__tagged',
      'span-full'
    ])
    editorialSingleStory.appendChild(editorialTagged)
  }

  if (footer) {
    const editorialFooter = createEditorialFooter({ ...footer })
    editorialFooter.className = addClasses([
      editorialFooter.className,
      'sb-editorial__footer',
      'span-full'
    ])
    editorialSingleStory.appendChild(editorialFooter)
  }

  return editorialSingleStory
}
