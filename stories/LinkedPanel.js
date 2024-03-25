import { strToDom } from '../utilities/dom';

export const createLinkedPanel = ({title, titleTag, buttonLabel, buttonUrl, newTab}) => {
	return strToDom(`
		<div class="sb-linked-panel">
			<${titleTag} class="sb-linked-panel__title">${title}</${titleTag}>
			<div class="sb-linked-panel__button-wrapper">
				<a class="sb-link sb-linked-panel__button" href="${buttonUrl}" ${newTab ? 'target="_blank" rel="noopener noreferrer"' : ''}>${buttonLabel}</a>
			</div>
		</div>
	`);
};
