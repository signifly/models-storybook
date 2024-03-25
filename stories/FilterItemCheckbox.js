import { strToDom } from '../utilities/dom';
import { getCheckableInput, getDefaultClasses } from '../utilities/filter-items/checkable-input';

export const createFilterItemCheckbox = ({title, size, hover, selected}) => {
	return strToDom(`
		<label 
			class="${getDefaultClasses(hover, selected).concat(`sb-filter-item--checkbox sb-filter-item--checkbox--${size}`).join(' ')}"
			tabindex="0"
			onkeydown="if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
        const input = this.querySelector('input[type=checkbox]');
        if (input) {
          input.checked = !input.checked;
        }
      }"
		>
			<span class="sb-filter-item__title">${title}</span>
			${getCheckableInput('checkbox')}
		</label>
	`);
};
