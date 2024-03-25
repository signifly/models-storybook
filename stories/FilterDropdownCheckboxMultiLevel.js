import { createFilterItemCheckbox } from './FilterItemCheckbox';
import { domToStr, strToDom } from '../utilities/dom';

export const createFilterDropdownCheckboxMultiLevel = ({groupNumber, number}) => {
	const groupTitles = [
		'Beauty',
		'Creatives',
		'Styling'
	];
	const titles = [
		'Modeling Agencies',
		'Mother Agencies',
		'Acting Agencies',
		'Art Direction',
		'Casting',
		'Creative Direction',
		'Film Direction'
	];

	const groupsDom = [];

	for (let i = 0 ; i < groupNumber ; i++) {
		const filterItemCheckboxs = [];

		for (let j = 0 ; j < number ; j++) {
			filterItemCheckboxs.push(createFilterItemCheckbox({
				title: titles[Math.floor(Math.random() * titles.length)]
			}));
		}

		groupsDom.push(`
			<div class="sb-filter-dropdown__group">
				${domToStr(createFilterItemCheckbox({title: groupTitles[Math.floor(Math.random() * groupTitles.length)], size: 'medium'}))}
				<div class="sb-filter-dropdown__group__items">
					${filterItemCheckboxs.map(filterItemCheckbox => domToStr(filterItemCheckbox)).join('')}
				</div>
			</div>
		`);
	}

	return strToDom(`
		<div class="sb-filter-dropdown sb-filter-dropdown--category">
			<div class="sb-filter-dropdown__wrapper">
				${groupsDom.join('')}
			</div>
		</div>
	`);
};