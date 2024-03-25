import { domToStr, strToDom } from '../utilities/dom'
import { createHeaderAccordion } from './HeaderAccordion'
import { createButton } from './Button'
import { createHeaderDropdownSocial } from './HeaderDropdownSocial'

export const createHeaderMobileMenu = ({ accordions, socialLinks, footerLinks, buttons }) => {
  return strToDom(`
		<div class="sb-header-mobile-menu">

		<div class="sb-header-mobile-menu__top">
      ${accordions.map((accordion) => domToStr(createHeaderAccordion(accordion))).join('')}
      <div class="sb-header-mobile-menu__buttons">
      ${buttons.map((button) => domToStr(createButton(button))).join('')}
      </div>
    </div>

      <div class="sb-header-mobile-menu__footer">
        <div class="sb-header-mobile-menu__social">
        ${domToStr(createHeaderDropdownSocial({ socialLinks }))}
        </div>

        <div class="sb-header-mobile-menu__footer-links">
        ${footerLinks.map((link) => `<a href="${link.url}">${link.label}</a>`).join('')}
        </div>
      </div>

		</div>
	`)
}
