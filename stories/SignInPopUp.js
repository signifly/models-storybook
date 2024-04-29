import { strToDom, domToStr } from "../utilities/dom";
import { createPopupWrapper } from "../utilities/popup-wrapper";
import { createAppleButton, createFacebookButton, createGoogleButton, createIconButton } from "./IconButton";
import { createTextInput } from "./TextInput";
import { createPasswordInput } from './PasswordInput';
import { createDatePicker } from './DatePicker';
import { createTabItem } from './TabItem';
import { createDivider } from "../utilities/divider";
import { createCheckBoxInput } from './CheckboxInput';
import { createButton } from './Button';

export const createSignInPopUp = ({}) => {
    // class creator with modifier
    const c = (modifier) => `sb-sign-in-pop-up__${modifier}`

    const classNames = {
        formLayout: `${c('form-layout')}`,
        headingLayout: `${c('heading-layout')}`,
        tabsLayout: `${c('tabs-layout')}`,
        buttonsLayout: `${c('buttons-layout')}`,
        dividerWrapper: `${c('divider-wrapper')}`,
        termsAndConditions: `${c('terms-and-conditions')}`
    }

    const tabs  = `<div class="${classNames.tabsLayout}" >
        ${domToStr(createTabItem({
            link: "#",
            active: true,
            title: "Login"
        }))}
        ${domToStr(createTabItem({
            link: "#",
            active: false,
            title: "Create an Account"
        }))}
    </div>`

    const form = `<form class="${classNames.formLayout}" >
        ${domToStr(createTextInput({
            name: "email",
            placeholder: "Email",
            label: "Email",
            isError: false,
            disabled: false,
            type: "email"
        }))}
        ${domToStr(createPasswordInput({
            label: "Create a password",
            name: "password",
            placeholder: "Password",
            isError: false,
            disabled: false,
            showPassword: false,
        }))}
        ${domToStr(createButton({
            label: "Sign In",
            primary: true,
            disabled: false,
        }))}
    </form>`

    const divider = `<div class="${classNames.dividerWrapper}" >
        ${domToStr(createDivider({
            text: "or"
        }))}
    </div>`


    const socialButtons = `<div class="${classNames.buttonsLayout}" >
        ${createGoogleButton({})}
        ${createAppleButton({})}
        ${createFacebookButton({})}
    </div>`

    const content = `
        <div>
            ${tabs}
            ${form}
            ${divider}
            ${socialButtons}
        <div/>
    `

    return createPopupWrapper({
        heading: "Welcome",
        content: content
    })
}