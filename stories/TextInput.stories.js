import { createTextInput } from "./TextInput";

export default {
    title: "Input/Text Input",
    argTypes: {
      name: { control: "text" },
      placeholder: { control: "text" },
      label: { control: "text" },
      hint: { control: "text" },
      isError: { control: "boolean" },
      disabled: { control: "boolean" },
      type: { control: "text" },
    },
  };

const Template = ({ ...args }) => {
    return createTextInput({ ...args });
};

export const TextInput = Template.bind({});
TextInput.args = {
    label: "label",
    name: "foo",
    placeholder: "Placeholder",
    hint: 'This is a hint text to help user.',
    isError: false,
    disabled: false,
    type: "text",
}