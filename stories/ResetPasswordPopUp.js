import { strToDom, domToStr } from "../utilities/dom";
import { createPopupWrapper } from "../utilities/popup-wrapper";
import { createButton } from "./Button";
import { createTextInput } from "./TextInput";

export const createResetPasswordPopUp = ({}) => {

    const c = (modifier) => `db_reset_password_pop_up__${modifier}`

    const classNames = {
        wrapper: `${c('wrapper')}`,
        hint: `${c('hint')}`,
    }

    const checkMark = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <g clip-path="url(#clip0_5623_5517)">
            <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#F7F7F7"/>
            <path d="M12.5 20L17.5 25L27.5 15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_5623_5517">
                <rect width="40" height="40" fill="white"/>
            </clipPath>
        </defs>
    </svg>
    `

    const hint = `<p class="${classNames.hint}" >Please check your email for instructions on resetting your password.</p>`

    const content = `<div class="${classNames.wrapper}" >
        ${checkMark}
        ${hint}
        ${domToStr(createButton({
            label: "Sign In",
            primary: true,
            disabled: false,
        }))}
    </div>`

    return createPopupWrapper({
        heading: "Reset Password",
        content: content
    })
}