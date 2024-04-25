import { strToDom, domToStr } from "../utilities/dom";
import { getCheckmark } from "../utilities/filter-items/checkable-input";

export const createCheckBoxInput = ({
    name,
    label,
    hint,
    isError,
    disabled = false
}) => {

    // class creator with modifier
    const c = (modifier) => `sb-checkbox-input__${modifier}`

    const classNames = {
        wrapper: `${c('wrapper')}`,
        inputLayout: `${c('input-layout')}`,
        label: `${c('label')}  ${disabled ? c('label--disabled') : ''}`,
        input: `${c('input')} ${disabled ? c('input--disabled') : ''} ${isError ? c('input--error') : ''}`,
        inputHidden: `${c('input-hidden')}`,
        hint: `${c('hint')} ${isError ? c('hint--error') : ''}`
    }

    return strToDom(`
        <div class="${classNames.wrapper}" >
            <label class="${classNames.inputLayout}">
                <input class="${classNames.inputHidden}" name="${name}" type="checkbox" ${disabled ? "disabled" : ''} tabindex="-1" />
                <span class="${classNames.input}">${getCheckmark()}</span>
                <span class="${classNames.label}" >${label}</span>
            </label>
            <p class="${classNames.hint}" >${hint}</p>
        </div>
    `)
}