import { createCheckBoxInput } from "./CheckboxInput";

export default {
    title: "Input/Check Box Input",
    argTypes: {
      name: { control: "text" },
      label: { control: "text" },
      hint: { control: "text" },
      isError: { control: "boolean" },
      disabled: { control: "boolean" },
    },
  };

const Template = ({ ...args }) => {
    return createCheckBoxInput({ ...args });
};

export const CheckBoxInput = Template.bind({});
CheckBoxInput.args = {
    label: "label",
    name: "foo",
    hint: 'This is a hint text to help user.',
    isError: false,
    disabled: false,
}