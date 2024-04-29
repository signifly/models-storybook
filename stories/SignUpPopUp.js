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


export const createSignUpPopUp = ({}) => {

    // class creator with modifier
    const c = (modifier) => `sb-sign-up-pop-up__${modifier}`

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
            active: false,
            title: "Login"
        }))}
        ${domToStr(createTabItem({
            link: "#",
            active: true,
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
        ${domToStr(createTextInput({
            name: "name",
            placeholder: "Name",
            label: "Name",
            isError: false,
            disabled: false,
            type: "name"
        }))}
        ${createDatePicker({
            primary: true,
            label: 'Birthday'
        })}
        ${domToStr(createCheckBoxInput({
            name: "terms",
            label: "I agree to the terms and conditions",
        }))}
        ${domToStr(createButton({
            label: "Sign Up",
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

    const conditions = `<p class="${classNames.termsAndConditions}">By continuing, you agree to Models.com's <a href="#" >Terms of service</a> and acknowledge you've read our <a href="#" >Privacy Policy</a>.</p>`

    const content = `
        <div>
            ${tabs}
            ${form}
            ${divider}
            ${socialButtons}
            ${conditions}
        <div/>
    `

    return createPopupWrapper({
        heading: "Welcome",
        content: content
    })
}