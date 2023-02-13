import { addClasses } from '../utilities/classes-names'
import { createAvatarGrid } from './AvatarGrid'
import { createContainer } from './Container'

export const createEditorialTagged = ({ title, avatars, buttonLabel, onClick }) => {
  const editorialTagged = createAvatarGrid({
    title: title,
    avatars: avatars,
    buttonLabel: buttonLabel,
    onButtonClick: onClick,
    centeredButton: true,
    fourColumns: true
  })
  return editorialTagged
}
