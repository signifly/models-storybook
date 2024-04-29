import { strToDom } from '../utilities/dom';

export const createAgencySignupButton = ({text, url, hover, style}) => {
	return strToDom(`
		<a href="${url}" class="sb-agency-signup-button ${hover ? 'sb-agency-signup-button--hover' : ''} ${style ? `sb-agency-signup-button--${style}` : ''}">
			${text}
		</a>	
	`);
};
