import { addClasses } from '../utilities/classes-names'
import { createProfileGrid } from './ProfileGrid'
import { createContainer } from './Container'

export const createEditorialTagged = ({ title, profiles, buttonLabel, onClick }) => {
  const editorialTagged = createProfileGrid({
    title: title,
    profiles: profiles,
    buttonLabel: buttonLabel,
    onButtonClick: onClick,
    centeredButton: true,
    fourColumns: true
  })
  return editorialTagged
}
