import { domToStr, strToDom } from '../utilities/dom'
import { createSocialLink } from './SocialLink'

export const createHeaderDropdownSocial = ({ socialLinks }) => {
  console.log('createHeaderDropdownSocial', createSocialLink({ url: '/', logo: 'facebook' }))
  return strToDom(`
    <div class="sb-header-dropdown-social sb-header-dropdown__item">
    ${socialLinks
      .map((socialLink) =>
        domToStr(createSocialLink({ url: socialLink.url, logo: socialLink.logo }))
      )
      .join('')}
	  </div>
  `)
}
