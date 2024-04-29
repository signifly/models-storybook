import { createSignInPopUp } from "./SignInPopUp";

export default {
    title: "Authentication/Sign In",
  };

const Template = ({ ...args }) => {
    return createSignInPopUp({ ...args });
};

export const SignIn = Template.bind({});
SignIn.args = {}