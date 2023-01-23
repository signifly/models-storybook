import { createCta } from './Cta';

export default {
  title: 'Components/CTA',
  argTypes: {
    title: { control: 'text' },
    buttonLabel: { control: 'text' },
    imgSrc: { control: 'text' },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ label, ...args }) => {
  return createCta({ label, ...args });
};

export const CTA = Template.bind({});
CTA.args = {
  size: 'large',
  imgSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  title: 'Title',
  buttonLabel: 'SEE ALL',
};
