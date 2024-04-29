import { createFilterItemCheckbox } from './FilterItemCheckbox';
import { domToStr, strToDom } from '../utilities/dom';

export const createFilterDropdownCheckbox = ({number}) => {
	const titles = [
		'Modeling Agencies',
		'Mother Agencies',
		'Acting Agencies',
		'Art Direction',
		'Casting',
		'Creative Direction',
		'Film Direction'
	];

	const filterItemCheckboxs = [];

	for (let i = 0 ; i < number ; i++) {
		filterItemCheckboxs.push(createFilterItemCheckbox({
			title: titles[Math.floor(Math.random() * titles.length)]
		}));
	}

	return strToDom(`
		<div class="sb-filter-dropdown sb-filter-dropdown--checkbox">
				${filterItemCheckboxs.map(filterItemCheckbox => domToStr(filterItemCheckbox)).join('')}
		</div>
	`);
};
