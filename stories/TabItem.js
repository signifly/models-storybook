import { strToDom } from '../utilities/dom';

export const createTabItem = ({title, link, hover, active}) => {
	return strToDom(`
		<a href="${link}" class="sb-tab-item ${hover ? 'sb-tab-item--hover' : ''} ${active ? 'sb-tab-item--active' : ''}">
			${title}
		</a>
	`);
};
