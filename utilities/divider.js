import { strToDom, domToStr } from "../utilities/dom";

export const createDivider = ({
    text,
}) => {

    // class creator with modifier
    const c = (modifier) => `sb-divider__${modifier}`

    const classNames = {
        layout: `${c('layout')}`,
        text: `${c('text')}`,
    }

    // return strToDom(`<div>test</div>`)
    return strToDom(`
        <div class="${classNames.layout}" >
            <span class="${classNames.text}" >${text}</span>
        </div>
    `)
}