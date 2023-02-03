import { createCard } from './Card'

export default {
  title: 'Components/Card',
  argTypes: {
    imgSrc: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    subtext: { control: 'text' },
    borders: { control: 'boolean' },
    borderRadius: { control: 'boolean' },
    titleMargin: { control: 'boolean' },
    onClick: { action: 'onClick' }
  }
}

const Template = ({ label, ...args }) => {
  return createCard({ label, ...args })
}

export const Card = Template.bind({})
Card.args = {
  imgSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  title: 'Model of the Week: South Sudanese Rookie Migoa Guol Debuted at Saint Laurent',
  subtitle: 'Subtitle',
  subtext: 'Subtext',
  borders: false,
  borderRadius: false,
  titleMargin: false
}

export const Borders = Template.bind({})
Borders.args = {
  imgSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  title: 'Title',
  subtitle: 'Subtitle',
  subtext: 'Subtext',
  borders: true,
  borderRadius: true,
  titleMargin: false
}

export const BorderRadius = Template.bind({})
BorderRadius.args = {
  imgSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  title: 'Title',
  subtitle: 'Subtitle',
  subtext: 'Subtext',
  borders: false,
  borderRadius: true,
  titleMargin: false
}

export const TitleMargin = Template.bind({})
TitleMargin.args = {
  imgSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  title: 'Title',
  subtitle: 'Subtitle',
  subtext: 'Subtext',
  borders: false,
  borderRadius: false,
  titleMargin: true
}
