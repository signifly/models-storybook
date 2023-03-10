import { addClasses } from '../utilities/classes-names'
import { createImage } from './Image'

export const createVideoCard = ({
  title,
  videoSrc,
  videoProgress,
  active,
  onVideoClick,
  onTaggedClick,
  tagged
}) => {
  const videoCard = document.createElement('div')
  videoCard.addEventListener('click', onVideoClick)
  videoCard.className = addClasses(['sb-video-card', active ? 'sb-video-card--active' : ''])

  const videoHeader = document.createElement('div')
  videoHeader.className = 'sb-video-card__header'

  const videoCardProgress = document.createElement('div')
  videoCardProgress.className = 'sb-video-card__progress'
  const videoCardProgressBar = document.createElement('div')
  videoCardProgressBar.className = 'sb-video-card__progress--bar'
  videoCardProgress.appendChild(videoCardProgressBar)
  videoCardProgress.style.setProperty('--video-progress', `${videoProgress || 0}%`)
  videoHeader.appendChild(videoCardProgress)

  if (title) {
    const videoTitle = document.createElement('p')
    videoTitle.className = 'sb-video-card__title'
    videoTitle.innerText = title
    videoHeader.appendChild(videoTitle)
  }

  if (tagged && tagged.length) {
    const videoTagged = document.createElement('div')
    videoTagged.className = 'sb-video-card__tagged'
    videoHeader.appendChild(videoTagged)

    const taggedAvatars = document.createElement('div')
    taggedAvatars.className = 'sb-tagged__avatars'
    videoTagged.appendChild(taggedAvatars)

    if (tagged && tagged.length) {
      tagged.forEach((img, index) => {
        const taggedAvatar = createImage({ ...img })
        if (index === tagged.length - 1) {
          taggedAvatar.className = addClasses([taggedAvatar.className, 'sb-image--more'])
        }
        taggedAvatars.appendChild(taggedAvatar)
      })
    }

    const taggedButton = document.createElement('button')
    taggedButton.className = addClasses(['sb-tagged__button', 'sb-link'])
    taggedButton.innerText = 'TAGGED'
    taggedButton.addEventListener('click', onTaggedClick)
    videoTagged.appendChild(taggedButton)
  }

  const videoElement = document.createElement('video')
  videoElement.setAttribute('autoplay', true)
  if (!active) {
    videoElement.pause()
  }
  videoElement.className = 'sb-video-card__video'

  const videoSrcElement = document.createElement('source')
  videoSrcElement.src = videoSrc
  videoElement.appendChild(videoSrcElement)

  videoCard.appendChild(videoHeader)
  videoCard.appendChild(videoElement)

  return videoCard
}
