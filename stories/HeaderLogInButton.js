import { strToDom } from '../utilities/dom';

export const createHeaderLogInButton = ({label, opened}) => {
	return strToDom(`
		<button class="sb-header-log-in-btn ${opened ? 'opened' : ''}">
      ${label}
      <span class="sb-header-log-in-btn__icon chevron-white-icon"></span>
		</button>
	`);
};
