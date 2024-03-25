import { strToDom } from '../utilities/dom';
import { getCloseButton } from '../utilities/filter-items/close-button';

export const createFilterItemWorkedWith = ({imageSrc, title, subTitle, hover, selected}) => {
	const titleLetters = title.split(' ').map((word) => word[0]).join('');

	return strToDom(`
		<div class="sb-filter-item sb-filter-item--worked-with ${hover ? 'sb-filter-item--hover' : ''} ${selected ? 'sb-filter-item--selected' : ''}">
			<div class="sb-filter-item__icon sb-filter-item--worked-with__icon">
				${imageSrc ? `<img src="${imageSrc}" alt="${title}" />` : `<p aria-hidden="true">${titleLetters}</p>`}
			</div>
			<div class="sb-filter-item--worked-with__content">
				<p class="sb-filter-item__title">${title}</p>
				<p class="sb-filter-item--worked-with__sub-title">${subTitle}</p>
			</div>
			${selected ? getCloseButton() : ''}
		</div>
	`);
};
