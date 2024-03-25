import { domToStr, strToDom } from '../utilities/dom';
import { createAgencySignupButton } from './AgencySignupButton';

export const createAgencySignup = ({title, titleTag = 'p', description, firstButtonUrl, firstButtonText, secondButtonUrl, secondButtonText}) => {
	return strToDom(`
		<div class="sb-agency-signup">
			<${titleTag} class="sb-agency-signup__title">${title}</${titleTag}>
			<p class="sb-agency-signup__description">${description}</p>
			<div class="sb-agency-signup__buttons">
				${domToStr(createAgencySignupButton({url: firstButtonUrl, text: firstButtonText, style: 'primary'}))}
				${domToStr(createAgencySignupButton({url: secondButtonUrl, text: secondButtonText, style: 'secondary'}))}
			</div>
		</div>
	`);
};
