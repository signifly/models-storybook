import { createResetPasswordPopUp } from "./ResetPasswordPopUp";

export default {
    title: "Authentication/Reset Password",
  };

const Template = ({ ...args }) => {
    return createResetPasswordPopUp({ ...args });
};

export const ResetPassword = Template.bind({});
ResetPassword.args = {}