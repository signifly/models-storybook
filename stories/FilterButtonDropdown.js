import { strToDom } from '../utilities/dom';

export const createFilterButtonDropdown = ({title, number, hover = false, opened = false}) => {
	const classes = ['sb-filter-button', 'sb-filter-button--dropdown'];

	if (hover) {
		classes.push('sb-filter-button--hover');
	}

	if (opened) {
		classes.push('sb-filter-button--active');
		classes.push('sb-filter-button--opened');
	}

	return strToDom(`
		<button 
			class="${classes.join(' ')}"
			aria-label="${title}"
			aria-expanded="${opened}"
		>
			<span>${title}</span>
			${number ? `
				<span class="sb-filter-button--dropdown__number">
					<span>${number}</span>
				</span>
			` : ''}
			<svg class="sb-filter-button--dropdown-arrow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
				 <path d="M1 1L5 5L9 1" stroke="#111111" stroke-linecap="square"/>
			</svg>
		</button>
	`);
};
