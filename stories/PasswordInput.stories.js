import { createPasswordInput } from './PasswordInput';

export default {
    title: "Examples/Agency Profile Page",
    argTypes: {
      name: { control: "text" },
      placeholder: { control: "text" },
      label: { control: "text" },
      hint: { control: "text" },
      isError: { control: "boolean" },
      disabled: { control: "boolean" },
      showPassword: { control: "boolean" },
    },
  };

const Template = ({ ...args }) => {
    return createPasswordInput({ ...args });
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
    label: "label",
    name: "foo",
    placeholder: "Placeholder",
    hint: 'This is a hint text to help user.',
    isError: false,
    disabled: false,
    showPassword: false,
}