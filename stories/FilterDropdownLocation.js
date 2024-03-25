import { domToStr, strToDom } from '../utilities/dom';
import { createFilterItemLocation } from './FilterItemLocation';
import { createFilterDropdownSearch } from './FilterDropdownSearch';

export const createFilterDropdownLocation = ({number, title, selected}) => {
	const search = createFilterDropdownSearch({
		placeholder: 'Search country or city'
	});

	const filterItemLocations = [];

	for (let i = 0 ; i < number ; i++) {
		filterItemLocations.push(createFilterItemLocation({
			location: 'New York, USA',
			selected
		}));
	}

	if (!selected) {
		return strToDom(`
			<div class="sb-filter-dropdown sb-filter-dropdown--md sb-filter-dropdown--with-gap sb-filter-dropdown--location">
					${domToStr(search)}
					<div class="sb-filter-dropdown__content">
						${title ? `<p class="sb-filter-dropdown__title">${title}</p>` : ''}
						${filterItemLocations.map(filterItemLocation => domToStr(filterItemLocation)).join('')}
					</div>
			</div>
		`);
	}

	return strToDom(`
		<div class="sb-filter-dropdown sb-filter-dropdown--md sb-filter-dropdown--with-gap sb-filter-dropdown--location sb-filter-dropdown--location--selected">
				<div class="sb-filter-dropdown__content sb-filter-dropdown__items">
					${filterItemLocations.map(filterItemLocation => domToStr(filterItemLocation)).join('')}
				</div>
				<div class="sb-filter-dropdown__content">
					${title ? `<p class="sb-filter-dropdown__title">${title}</p>` : ''}
					${domToStr(search)}
				</div>
		</div>
	`);
};
