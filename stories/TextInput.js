import { strToDom, domToStr } from "../utilities/dom";

export const createTextInput = ({
    name,
    placeholder,
    label,
    hint,
    isError,
    disabled = false,
    type = "text",
    icon = ""
}) => {

    // class creator with modifier
    const c = (modifier) => `sb-text-input__${modifier}`

    const classNames = {
        layout: `${c('layout')}`,
        wrapper: `${c('wrapper')} ${disabled ? c('wrapper--disabled') : ''} ${isError ? c('wrapper--error') : ''}`,
        label: `${c('label')}  ${disabled ? c('label--disabled') : ''}`,
        input: `${c('input')} ${disabled ? c('input--disabled') : ''} ${isError ? c('input--error') : ''}`,
        hint: `${c('hint')} ${isError ? c('hint--error') : ''}`,
        icon: `${c('icon')}`
    }

    return strToDom(`
        <div class="${classNames.layout}" >
            <div class="${classNames.wrapper}" >
                <label class="${classNames.label}" for="${name}" >${label}</label>
                <input class="${classNames.input}" name="${name}" placeholder="${placeholder}" type="${type}" ${disabled ? "disabled" : ''} />
                ${icon ? `<div class="${classNames.icon}" >${icon}</div>` : ''}
            </div>
            ${hint && `<p class="${classNames.hint}" >${hint}</p>`}
        </div>
    `)
}