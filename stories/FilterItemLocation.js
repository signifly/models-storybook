import { strToDom } from '../utilities/dom';
import { getCloseButton } from '../utilities/filter-items/close-button';

export const createFilterItemLocation = ({location, hover, selected}) => {
	return strToDom(`
		<div class="sb-filter-item sb-filter-item--location ${hover ? 'sb-filter-item--hover' : ''} ${selected ? 'sb-filter-item--selected' : ''}">
			<div class="sb-filter-item__icon">
				<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
				  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.64081 14.0306C8.42855 14.2411 8.21493 14.453 8.0013 14.6666C7.78768 14.453 7.57405 14.2411 7.3618 14.0306C4.9245 11.6138 2.66797 9.37614 2.66797 6.66658C2.66797 3.72107 5.05578 1.33325 8.0013 1.33325C10.9468 1.33325 13.3346 3.72107 13.3346 6.66658C13.3346 9.37614 11.0781 11.6138 8.64081 14.0306ZM10.0013 6.66659C10.0013 7.77115 9.10587 8.66659 8.0013 8.66659C6.89673 8.66659 6.0013 7.77115 6.0013 6.66659C6.0013 5.56202 6.89673 4.66659 8.0013 4.66659C9.10587 4.66659 10.0013 5.56202 10.0013 6.66659Z" fill="#999999"/>
				</svg>
			</div>
			<div class="sb-filter-item--location__content">
				<p class="sb-filter-item__title">${location}</p>
			</div>
			${selected ? getCloseButton() : ''}
		</div>
	`);
};
