import { addClasses } from '../utilities/classes-names'

export const createVideoCard = ({ title, videoSrc, videoProgress, active, onClick }) => {
  const videoCard = document.createElement('div')
  videoCard.addEventListener('click', onClick)
  videoCard.className = addClasses(['sb-video-card', active ? 'sb-video-card--active' : ''])

  const videoCardProgress = document.createElement('div')
  videoCardProgress.className = addClasses(['sb-video-card__progress'])
  const videoCardProgressBar = document.createElement('div')
  videoCardProgressBar.className = addClasses(['sb-video-card__progress--bar'])
  videoCardProgress.appendChild(videoCardProgressBar)

  videoCardProgress.style.setProperty('--video-progress', `${videoProgress || 0}%`)

  videoCard.appendChild(videoCardProgress)

  const videoHeader = document.createElement('div')
  videoHeader.className = addClasses(['sb-video-card__header'])

  if (title) {
    const videoTitle = document.createElement('p')
    videoTitle.className = addClasses(['sb-video-card__title'])
    videoTitle.innerText = title
    videoHeader.appendChild(videoTitle)
  }

  const videoElement = document.createElement('video')
  videoElement.setAttribute('autoplay', true)
  if (!active) {
    videoElement.pause()
  }
  videoElement.className = addClasses(['sb-video-card__video'])

  const videoSrcElement = document.createElement('source')
  videoSrcElement.src = videoSrc
  videoElement.appendChild(videoSrcElement)

  videoCard.appendChild(videoHeader)
  videoCard.appendChild(videoElement)

  return videoCard
}
