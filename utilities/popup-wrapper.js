import { strToDom, domToStr } from "../utilities/dom";

export const createPopupWrapper = ({
    heading,
    content,
    back = false
}) => {

    // class creator with modifier
    const c = (modifier) => `sb-pop-up-wrapper__${modifier}`

    const classNames = {
        layout: `${c('layout')}`,
        headingLayout: `${c('heading-layout')}`,
        heading: `${c('heading')}`,
        icon: `${c('icon')}`,
        contentWrapper : `${c('content-wrapper')}`
    }

    return strToDom(`
        <div class="${classNames.layout}" >
            <div class="${classNames.headingLayout}" >
                <div class="${classNames.icon}" >
                ${ back ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 5L9.16667 12L15 19" stroke="#111111" stroke-width="1.5" stroke-linecap="square"/>
                </svg>` : ''}
                </div>
                <h4 class="${classNames.heading}" >${heading}</h4>
                <div class="${classNames.icon}" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 5.00024L19.1421 19.1424" stroke="#111111" stroke-width="1.5"/>
                        <path d="M5 19.1424L19.1421 5.00024" stroke="#111111" stroke-width="1.5"/>
                    </svg>
                </div>
            </div>
            <div class="${classNames.contentWrapper}" >
                ${content}
            </div>
        </div>
    `)
}