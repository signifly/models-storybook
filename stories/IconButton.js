import { strToDom, domToStr } from "../utilities/dom";

export const createIconButton = ({
    icon,
    label,
    role = "button",
    backgroundColor = "#fff",
    color = "#000",
}) => {

    const c = (modifier) => `sb-icon-button__${modifier}`

    const classNames = {
        layout: `${c('layout')}`,
        icon: `${c('icon')}`,
        label: `${c('label')}`,
    }

    const styles = {
        button: `${backgroundColor ? `background-color: ${backgroundColor};` : '' }`,
        label: `${color ? `color: ${color};` : '' }`,
    }

    return strToDom(`
        <button style="${styles.button}" ${role ? `role=${role}` : '' } class="${classNames.layout}" >
            <div class="${classNames.icon}" >${icon}</div>
            <span style="${styles.label}" class="${classNames.label}" >${label}</span>
        </button>
    `)
};