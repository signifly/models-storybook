import { strToDom } from '../utilities/dom';

export const createFilterItemToggle = ({title, isActive, size}) => {
	return strToDom(`
		<label 
			class="sb-filter-item sb-filter-item--toggle ${size ? `sb-filter-item--toggle--${size}` : ''}"
			tabindex="0"
			onkeydown="if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
        const input = this.querySelector('input[type=checkbox]');
        if (input) {
          input.checked = !input.checked;
        }
      }"
		>
			<p class="sb-filter-item__title">${title}</p>
			<div class="sb-filter-item__toggle">
				<input type="checkbox" id="sb-filter-item-toggle" ${isActive ? 'checked' : ''} />
				<span class="sb-filter-item__toggle-check">
					<span class="sb-filter-item__toggle-check-icon">
						<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
		          <path d="M7 1L2.875 5.125L1 3.25" stroke="white" stroke-width="1.25" stroke-linecap="square"/>
						</svg>
					</span>
				</span>
			</div>
		</label>
	`);
};
