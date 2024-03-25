import { strToDom } from '../utilities/dom'

export const createHeaderAccordion = ({ title, links, opened }) => {
  return strToDom(`
		<div class="sb-header-accordion sb-font-primary--medium ${opened ? 'opened' : ''}">
      <div class="sb-header-accordion__title">
        <span>${title}</span>
        <span class="sb-header-accordion__chevron chevron-black-icon"></span>
      </div>
      <div class="sb-header-accordion__links-container">
        <ul class="sb-header-accordion__links">
          ${links.map((link) => `<li><a href="${link.url}">${link.label}</a></li>`).join('')}
        </ul>
      </div>
		</div>
	`)
}
