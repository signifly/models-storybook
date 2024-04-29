import { strToDom, domToStr } from "../utilities/dom";
import { createTextInput } from "./TextInput";

export const createPasswordInput = ({
    name,
    placeholder,
    label,
    hint,
    isError,
    disabled = false,
    showPassword,
}) => {


    const eyeOpen = `
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.01677 7.59432C0.90328 7.41462 0.846535 7.32477 0.81477 7.18618C0.79091 7.08209 0.79091 6.91792 0.81477 6.81383C0.846535 6.67524 0.90328 6.58539 1.01677 6.40569C1.95461 4.92071 4.74617 1.16667 9.00034 1.16667C13.2545 1.16667 16.0461 4.92071 16.9839 6.40569C17.0974 6.58539 17.1541 6.67524 17.1859 6.81383C17.2098 6.91792 17.2098 7.08209 17.1859 7.18618C17.1541 7.32477 17.0974 7.41462 16.9839 7.59432C16.0461 9.0793 13.2545 12.8333 9.00034 12.8333C4.74617 12.8333 1.95461 9.0793 1.01677 7.59432Z" stroke="#262626" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.00034 9.5C10.381 9.5 11.5003 8.38072 11.5003 7C11.5003 5.61929 10.381 4.50001 9.00034 4.50001C7.61962 4.50001 6.50034 5.61929 6.50034 7C6.50034 8.38072 7.61962 9.5 9.00034 9.5Z" stroke="#262626" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
    const eyeClose = `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.95245 3.2436C8.29113 3.19353 8.64051 3.16667 9.00035 3.16667C13.2545 3.16667 16.0461 6.9207 16.9839 8.40569C17.0974 8.58542 17.1542 8.67528 17.1859 8.81389C17.2098 8.91799 17.2098 9.08222 17.1859 9.18631C17.1541 9.32492 17.097 9.41538 16.9827 9.59631C16.7328 9.99179 16.3518 10.5476 15.8471 11.1504M4.6036 4.59586C2.80187 5.81808 1.57871 7.51615 1.01759 8.4044C0.903571 8.58489 0.846562 8.67514 0.814783 8.81373C0.790914 8.91783 0.790905 9.08203 0.814761 9.18613C0.846525 9.32473 0.903276 9.41459 1.01678 9.59432C1.95462 11.0793 4.74618 14.8333 9.00035 14.8333C10.7157 14.8333 12.1932 14.223 13.4073 13.3972M1.50035 1.5L16.5003 16.5M7.23258 7.23223C6.78017 7.68464 6.50035 8.30964 6.50035 9C6.50035 10.3807 7.61963 11.5 9.00035 11.5C9.6907 11.5 10.3157 11.2202 10.7681 10.7678" stroke="#262626" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `

    const type = showPassword ? 'text' : 'password'
    const icon = showPassword ? eyeClose : eyeOpen
    const input = createTextInput({name, placeholder, label, hint, isError, disabled, type, icon})
    return strToDom(`${domToStr(input)}`)
}