import { createPopUp } from './PopUp'
import { createAvatarScroll } from './AvatarScroll'

export const createPopUpExample = ({ fixed, height, width,onClick }) => {
  const popupContent = createAvatarScroll({
    title: 'Tagged People',
    avatars: [
      {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        title: 'Title',
        subtitle: 'Subtitle'
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        title: 'Title',
        subtitle: 'Subtitle'
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        title: 'Title',
        subtitle: 'Subtitle'
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        title: 'Title',
        subtitle: 'Subtitle'
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        title: 'Title',
        subtitle: 'Subtitle'
      }
    ]
  })

  const popup = createPopUp({ fixed, height, width, content: popupContent, onClick })

  return popup
}
