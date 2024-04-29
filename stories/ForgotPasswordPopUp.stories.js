import { createForgotPasswordPopUp } from "./ForgotPasswordPopUp copy";

export default {
    title: "Authentication/Forgot Password",
  };

const Template = ({ ...args }) => {
    return createForgotPasswordPopUp({ ...args });
};

export const ForgotPassword = Template.bind({});
ForgotPassword.args = {}