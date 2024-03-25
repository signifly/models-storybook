import { strToDom } from '../utilities/dom';

export const createHeaderSearch = ({placeholder, focused, hovered}) => {
	return strToDom(`
		<div class="sb-header-search ${focused ? 'sb-header-search--focused' : ''} ${hovered ? 'sb-header-search--hovered' : ''}">
			<div class="sb-header-search__input">
				<input
					type="text"
					placeholder="${placeholder}"
					onfocus="this.parentElement.parentElement.classList.add('sb-header-search--focused')"
					onblur="this.parentElement.parentElement.classList.remove('sb-header-search--focused')"
				/>
			</div>
			<button class="sb-header-search__button" title="Search">
				<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
					 <path d="M14 14L10.0001 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>
		</div>
	`);
};
