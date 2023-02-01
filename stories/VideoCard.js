export const createVideoCard = ({ title, videoSrc, videoProgress, active, onClick }) => {
  const videoCard = document.createElement('div')
  videoCard.addEventListener('click', onClick)
  videoCard.className = ['video-card', active ? 'video-card--active' : ''].join(' ')

  const videoCardProgress = document.createElement('div')
  videoCardProgress.className = ['video-card__progress'].join(' ')
  const videoCardProgressBar = document.createElement('div')
  videoCardProgressBar.className = ['video-card__progress--bar'].join(' ')
  videoCardProgress.appendChild(videoCardProgressBar)

  videoCardProgress.style.setProperty('--video-progress', `${videoProgress || 0}%`)

  videoCard.appendChild(videoCardProgress)

  const videoHeader = document.createElement('div')
  videoHeader.className = ['video-card__header'].join(' ')

  if (title) {
    const videoTitle = document.createElement('p')
    videoTitle.className = ['video-card__title'].join(' ')
    videoTitle.innerText = title
    videoHeader.appendChild(videoTitle)
  }

  const videoElement = document.createElement('video')
  videoElement.setAttribute('autoplay', true)
  if (!active) {
    videoElement.pause()
  }
  videoElement.className = ['video-card__video'].join(' ')

  const videoSrcElement = document.createElement('source')
  videoSrcElement.src = videoSrc
  videoElement.appendChild(videoSrcElement)

  videoCard.appendChild(videoHeader)
  videoCard.appendChild(videoElement)

  return videoCard
}
