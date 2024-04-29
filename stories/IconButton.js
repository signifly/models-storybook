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

    return `
        <button style="${styles.button}" ${role ? `role=${role}` : '' } class="${classNames.layout}" >
            <div class="${classNames.icon}" >${icon}</div>
            <span style="${styles.label}" class="${classNames.label}" >${label}</span>
        </button>
    `
};

const GoogleIcon  = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g clip-path="url(#clip0_5620_5033)">
    <path d="M19.8052 10.2303C19.8052 9.55056 19.7501 8.86711 19.6325 8.19836H10.2002V12.0492H15.6016C15.3775 13.2911 14.6573 14.3898 13.6027 15.0879V17.5866H16.8252C18.7176 15.8449 19.8052 13.2728 19.8052 10.2303Z" fill="#4285F4"/>
    <path d="M10.1999 20.0006C12.897 20.0006 15.1714 19.1151 16.8286 17.5865L13.6061 15.0879C12.7096 15.6979 11.5521 16.0433 10.2036 16.0433C7.59474 16.0433 5.38272 14.2832 4.58904 11.9169H1.26367V14.4927C2.96127 17.8695 6.41892 20.0006 10.1999 20.0006Z" fill="#34A853"/>
    <path d="M4.58564 11.9169C4.16676 10.6749 4.16676 9.33008 4.58564 8.08811V5.51233H1.26395C-0.154389 8.33798 -0.154389 11.667 1.26395 14.4927L4.58564 11.9169Z" fill="#FBBC04"/>
    <path d="M10.1999 3.95805C11.6256 3.936 13.0035 4.47247 14.036 5.45722L16.8911 2.60218C15.0833 0.904587 12.6838 -0.0287217 10.1999 0.000673888C6.41892 0.000673888 2.96126 2.13185 1.26367 5.51234L4.58537 8.08813C5.37537 5.71811 7.59106 3.95805 10.1999 3.95805Z" fill="#EA4335"/>
    </g>
    <defs>
    <clipPath id="clip0_5620_5033">
    <rect width="20" height="20" fill="white"/>
    </clipPath>
    </defs>
    </svg>`

export const createGoogleButton = ({}) => {
    return createIconButton({
        backgroundColor: "#fff",
        color: "#000",
        label: "continue with google",
        icon: GoogleIcon
    })
}

const AppleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
        <path d="M17.8689 14.2875C17.5916 14.928 17.2634 15.5176 16.8832 16.0596C16.3649 16.7986 15.9405 17.3101 15.6135 17.5942C15.1065 18.0604 14.5633 18.2992 13.9816 18.3128C13.5641 18.3128 13.0605 18.1939 12.4743 17.9529C11.8862 17.713 11.3457 17.5942 10.8515 17.5942C10.3332 17.5942 9.77733 17.713 9.18276 17.9529C8.58728 18.1939 8.10757 18.3196 7.74081 18.332C7.18302 18.3558 6.62704 18.1102 6.07207 17.5942C5.71787 17.2852 5.27483 16.7556 4.74408 16.0053C4.17464 15.2041 3.70647 14.275 3.3397 13.2158C2.94691 12.0717 2.75 10.9638 2.75 9.89123C2.75 8.6626 3.01549 7.60292 3.54725 6.71491C3.96517 6.00163 4.52115 5.43897 5.217 5.02592C5.91285 4.61286 6.66472 4.40238 7.47442 4.38891C7.91746 4.38891 8.49845 4.52595 9.22044 4.79529C9.9404 5.06552 10.4027 5.20257 10.6054 5.20257C10.7569 5.20257 11.2704 5.04233 12.141 4.72286C12.9643 4.42659 13.6591 4.30392 14.2283 4.35224C15.7708 4.47673 16.9296 5.08476 17.7002 6.1802C16.3208 7.01604 15.6384 8.18674 15.652 9.68855C15.6644 10.8583 16.0888 11.8318 16.9228 12.6047C17.3008 12.9634 17.7229 13.2407 18.1925 13.4376C18.0907 13.733 17.9832 14.0159 17.8689 14.2875ZM14.3313 0.367015C14.3313 1.28389 13.9963 2.13998 13.3287 2.93236C12.5229 3.87435 11.5484 4.41867 10.4915 4.33278C10.478 4.22278 10.4702 4.10701 10.4702 3.98536C10.4702 3.10516 10.8534 2.16317 11.5339 1.39297C11.8736 1.003 12.3057 0.678752 12.8296 0.420089C13.3524 0.165286 13.847 0.0243746 14.3121 0.000244141C14.3257 0.122816 14.3313 0.245396 14.3313 0.367003V0.367015Z" fill="white"/>
    </svg>`

export const createAppleButton = ({}) => {
    return createIconButton({
        backgroundColor: "#000",
        color: "#fff",
        label: "continue with Apple",
        icon: AppleIcon
    })
}

const FacebookIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <g clip-path="url(#clip0_5620_5030)">
    <path d="M20.5 10C20.5 4.47715 16.0229 0 10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 14.9912 4.15684 19.1283 8.9375 19.8785V12.8906H6.39844V10H8.9375V7.79688C8.9375 5.29063 10.4305 3.90625 12.7146 3.90625C13.8084 3.90625 14.9531 4.10156 14.9531 4.10156V6.5625H13.6922C12.45 6.5625 12.0625 7.3334 12.0625 8.125V10H14.8359L14.3926 12.8906H12.0625V19.8785C16.8432 19.1283 20.5 14.9912 20.5 10Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_5620_5030">
    <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
    </clipPath>
    </defs>
    </svg>`

export const createFacebookButton = ({}) => {
    return createIconButton({
        backgroundColor: "#1877F2",
        color: "#fff",
        label: "continue with facebook",
        icon: FacebookIcon
    })
}