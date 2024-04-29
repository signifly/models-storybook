import { strToDom, domToStr } from "../utilities/dom";
import { createPopupWrapper } from "../utilities/popup-wrapper";
import { createButton } from "./Button";
import { createTextInput } from "./TextInput";

export const createForgotPasswordPopUp = ({}) => {

    const c = (modifier) => `db_forgot_password_pop_up__${modifier}`

    const classNames = {
        wrapper: `${c('wrapper')}`,
        hint: `${c('hint')}`,
    }

    const hint = `<p class="${classNames.hint}" >Please enter your email address to receive instructions for resetting your password.</p>`

    const content = `<div class="${classNames.wrapper}" >
        ${hint}
        ${domToStr(createTextInput({
            name: "email",
            placeholder: "Email",
            label: "Email",
            isError: false,
            disabled: false,
            type: "email"
        }))}
        ${domToStr(createButton({
            label: "Sign In",
            primary: true,
            disabled: false,
        }))}
    </div>`

    return createPopupWrapper({
        heading: "Forgot Password",
        content: content,
        back: true,
    })
}