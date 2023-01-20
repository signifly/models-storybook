import { createCard } from './Card';

export default {
  title: 'Components/Card',
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    imgSrc: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ label, ...args }) => {
  return createCard({ label, ...args });
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  imgSrc: '/',
  title: 'Title',
  subtitle: 'Subtitle',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  imgSrc: '/',
  title: 'Title',
  subtitle: 'Subtitle',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  imgSrc: '/',
  title: 'Title',
  subtitle: 'Subtitle',
};
