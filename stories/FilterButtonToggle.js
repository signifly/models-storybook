import { strToDom } from "../utilities/dom";

export const createFilterButtonToggle = ({
  title,
  hover = false,
  active = false,
  useIcon = true,
}) => {
  return strToDom(`
		<button 
			class="sb-filter-button sb-filter-button--toggle ${
        hover ? "sb-filter-button--hover" : ""
      } ${active ? "sb-filter-button--active" : ""}"
			aria-label="${title}"
			aria-selected="${active}"	
		>
			<span>${title}</span>
			${
        useIcon && active
          ? `
				<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
				  <circle cx="8" cy="8" r="8" fill="#111111"/>
				  <path d="M11 6L6.875 10.125L5 8.25" stroke="white" stroke-width="1.25" stroke-linecap="square"/>
				</svg>
			`
          : ""
      }
		</button>
	`);
};
