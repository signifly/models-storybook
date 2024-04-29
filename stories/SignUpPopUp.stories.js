import { createSignUpPopUp } from "./SignUpPopUp";

export default {
    title: "Authentication/Sign Up",
  };

const Template = ({ ...args }) => {
    return createSignUpPopUp({ ...args });
};

export const SignUp = Template.bind({});
SignUp.args = {}