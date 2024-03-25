export const getCheckmark = () => {
	return `
		<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
				<path d="M13 4.25L6.125 11.125L3 8" stroke="white" stroke-width="1.6666" stroke-linecap="square"/>
		</svg>
	`;
};

export const getDefaultClasses = (hover, selected) => {
	const classes = ['sb-filter-item', 'sb-filter-item--checkable'];

	if (hover) {
		classes.push('sb-filter-item--hover');
	}

	if (selected) {
		classes.push('sb-filter-item--selected');
	}

	return classes;
};

export const getCheckableInput = (type) => {
	return `
		<span class="sb-filter-item--checkable__input">
			<input type="${type}" name="${type}" tabindex="-1" />
			<span class="sb-filter-item--checkable__checkmark">${getCheckmark()}</span>
		</span>
	`;
};