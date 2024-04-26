import { strToDom, domToStr } from "../utilities/dom";

export const createIconButton = ({
    role = "button",
}) => {

    const c = (modifier) => `sb-icon-button__${modifier}`

    const classNames = {
        layout: `${c('layout')}`,
        icon: `${c('icon')}`,
        label: `${c('label')}`,
    }

    return strToDom(`
        <button ${role ?} class="${classNames.layout}" >
            <div class="${classNames.icon}" >Icon</div>
            <span class="${classNames.label}" >Label</span>
        </button>
    `)
};