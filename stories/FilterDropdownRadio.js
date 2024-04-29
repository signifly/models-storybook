import { createFilterItemRadio } from './FilterItemRadio';
import { domToStr, strToDom } from '../utilities/dom';

export const createFilterDropdownRadio = ({number}) => {
	const titles = [
		'Recently Updated',
		'A - Z',
		'Z - A',
		'Woman',
		'Men',
		'Non-Binary',
		'Discover',
		'Modeling & Acting Agencies',
		'Creative Talent Agencies',
		'Production & Creative Services'
	];

	const filterItemRadios = [];

	for (let i = 0 ; i < number ; i++) {
		filterItemRadios.push(createFilterItemRadio({
			title: titles[Math.floor(Math.random() * titles.length)]
		}));
	}

	return strToDom(`
		<div class="sb-filter-dropdown sb-filter-dropdown--radio">
				${filterItemRadios.map(filterItemRadio => domToStr(filterItemRadio)).join('')}
		</div>
	`);
};
