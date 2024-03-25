import { domToStr, strToDom } from '../utilities/dom';
import { createFilterDropdownSearch } from './FilterDropdownSearch';
import { createFilterItemWorkedWith } from './FilterItemWorkedWith';
import { createFilterItemToggle } from './FilterItemToggle';

export const createFilterDropdownWorkedWith = ({number, toggleText, title, selected}) => {
	const search = createFilterDropdownSearch({
		placeholder: 'Search client'
	});

	const filterItemWorkedWith = [];

	const titles = [
		'Gucci',
		'Gucci Beauty'
	];

	for (let i = 0 ; i < number ; i++) {
		filterItemWorkedWith.push(createFilterItemWorkedWith({
			title: titles[Math.floor(Math.random() * titles.length)],
			subTitle: 'Client',
			selected
		}));
	}

	if (!selected) {
		return strToDom(`
			<div class="sb-filter-dropdown sb-filter-dropdown--md sb-filter-dropdown--with-gap sb-filter-dropdown--worked-with">
					${domToStr(search)}
					${domToStr(createFilterItemToggle({title: toggleText}))}
					<hr>
					<div class="sb-filter-dropdown__content">
						${title ? `<p class="sb-filter-dropdown__title">${title}</p>` : ''}
						${filterItemWorkedWith.map(filterItemLocation => domToStr(filterItemLocation)).join('')}
					</div>
			</div>
		`);
	}

	return strToDom(`
		<div class="sb-filter-dropdown sb-filter-dropdown--md sb-filter-dropdown--with-gap sb-filter-dropdown--worked-with sb-filter-dropdown--worked-with--selected">
				<div class="sb-filter-dropdown__content sb-filter-dropdown__items">
					${filterItemWorkedWith.map(filterItemLocation => domToStr(filterItemLocation)).join('')}
				</div>
				<div class="sb-filter-dropdown__content">
					${title ? `<p class="sb-filter-dropdown__title">${title}</p>` : ''}
					${domToStr(search)}
				</div>
		</div>
	`);
};
