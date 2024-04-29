import { domToStr, strToDom } from '../utilities/dom'
import { createHeaderSearch } from './HeaderSearch'
import { createHeaderAvatarButton } from './HeaderAvatarButton'
import { createHeaderDropdown } from './HeaderDropdown'
import { createHeaderMobileMenu } from './HeaderMobileMenu'

export const createHeaderMobile = ({ menuOpened, avatarOpened, menuDropdownData, avatarDropdownData }) => {
  return strToDom(`
    <div class="sb-header-mobile sb-font-primary ${
      menuOpened ? 'sb-header-mobile--open-menu' : ''
    } ${avatarOpened ? 'sb-header-mobile--open-avatar' : ''}">
      <div class="sb-header-mobile__main">
        <div class="sb-header-mobile__left">
          <button class="sb-header-mobile__hamburger">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6H22" stroke="#111111" stroke-width="1.5"/>
            <path d="M2 12H22" stroke="#111111" stroke-width="1.5"/>
            <path d="M2 18H22" stroke="#111111" stroke-width="1.5"/>
            </svg>
          </button>

          <button class="sb-header-mobile__close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5.00024L19.1421 19.1424" stroke="#111111" stroke-width="1.5"/>
            <path d="M5 19.1424L19.1421 5.00024" stroke="#111111" stroke-width="1.5"/>
            </svg>
          </button>

          <a class="sb-header-mobile__logo" href="">
            <svg width="91" height="24" viewBox="0 0 91 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7337 19.5625H16.9786V10.8011C16.9786 9.85856 16.7426 9.11408 16.2713 8.56989C15.8721 8.08027 15.3641 7.83518 14.7474 7.83518C14.0946 7.83518 13.5319 8.09857 13.0605 8.62454C12.5524 9.20514 12.2986 9.9671 12.2986 10.9105V19.5625H8.46199V10.8558C8.46199 9.87605 8.34407 9.17785 8.10836 8.76035C7.76379 8.19869 7.11941 7.91718 6.17675 7.91718C4.61647 7.91718 3.83657 8.86057 3.83657 10.7466V19.5625H0V5.06H3.61906V6.44784C3.61906 6.97442 3.6278 7.2371 3.64614 7.2371C3.64614 7.21887 3.65509 7.20067 3.6734 7.18247C4.23537 6.31193 4.8069 5.68574 5.38739 5.30506C6.04053 4.88817 6.85683 4.67911 7.83633 4.67911C8.81602 4.67911 9.60043 4.85627 10.1901 5.2099C10.7791 5.56364 11.337 6.16696 11.8633 7.01917C12.3892 6.23989 12.9559 5.6451 13.5638 5.23695C14.1713 4.82891 14.9109 4.62477 15.7814 4.62477C16.7066 4.62477 17.5908 4.8608 18.4344 5.33214C19.2779 5.80417 19.8718 6.41637 20.2164 7.16919C20.561 7.92213 20.7337 8.70643 20.7337 9.52234V19.5625Z" fill="#111111"/>
            <path d="M32.651 12.3288C32.651 9.38997 31.49 7.92074 29.1682 7.92074C26.8282 7.92074 25.6582 9.38997 25.6582 12.3288C25.6582 15.2674 26.8282 16.7367 29.1682 16.7367C31.49 16.7367 32.651 15.2674 32.651 12.3288ZM36.5415 12.3288C36.5415 14.6324 35.8796 16.4776 34.5556 17.8656C33.2312 19.253 31.4357 19.9473 29.1682 19.9473C26.8643 19.9473 25.0461 19.244 23.7127 17.8383C22.3796 16.4328 21.7129 14.5964 21.7129 12.3288C21.7129 10.0428 22.3751 8.19741 23.699 6.79166C25.023 5.38612 26.8461 4.68268 29.1682 4.68268C31.49 4.68268 33.3129 5.39948 34.6372 6.8323C35.9065 8.22952 36.5415 10.0609 36.5415 12.3288Z" fill="#111111"/>
            <path d="M47.6669 12.6533C47.6669 9.53325 46.5878 7.97347 44.4291 7.97347C42.2527 7.97347 41.1643 9.46113 41.1643 12.4355C41.1643 13.8327 41.4996 14.9384 42.171 15.7552C42.7694 16.4807 43.5132 16.8434 44.4019 16.8434C45.2906 16.8434 46.0344 16.4898 46.6334 15.7823C47.3224 15.0022 47.6669 13.9595 47.6669 12.6533ZM51.3405 19.5643H47.6127V17.7686H47.5587C46.6516 19.2561 45.3183 20 43.5591 20C42.3251 20 41.1909 19.6414 40.1574 18.9251C39.1233 18.2085 38.3797 17.2881 37.9262 16.1636C37.4726 15.0388 37.2461 13.7144 37.2461 12.1903C37.2461 10.1229 37.7173 8.40838 38.6608 7.04841C39.7307 5.47011 41.2636 4.68089 43.2593 4.68089C45.0367 4.68089 46.4335 5.44285 47.4494 6.96642H47.5036V0.00104332H51.3405V19.5643Z" fill="#111111"/>
            <path d="M62.1189 10.9141C62.0277 9.94259 61.6972 9.17855 61.1256 8.621C60.5543 8.06345 59.8966 7.78483 59.1531 7.78483C58.4272 7.78483 57.8016 8.04535 57.2756 8.56708C56.6951 9.12452 56.3321 9.90688 56.1873 10.9141H62.1189ZM66.0371 13.3352H56.0514C56.1417 14.5328 56.5228 15.458 57.1942 16.1106C57.7747 16.6549 58.4819 16.9265 59.3164 16.9265C59.9327 16.9265 60.4864 16.7816 60.9763 16.4916C61.4656 16.2017 61.783 15.8114 61.9284 15.3215H65.8464C65.4113 16.7907 64.6311 17.9293 63.5064 18.7363C62.382 19.5437 61.0482 19.9473 59.5071 19.9473C54.6635 19.9473 52.2422 17.3074 52.2422 12.0291C52.2422 9.79833 52.8543 8.01591 54.0788 6.68249C55.3031 5.34927 57.0212 4.68268 59.235 4.68268C63.7693 4.68268 66.0371 7.56711 66.0371 13.3352Z" fill="#111111"/>
            <path d="M70.9577 19.5625H67.1211V-0.000724792H70.9577V19.5625Z" fill="#111111"/>
            <path d="M85.3795 14.9384C85.3795 15.973 85.1253 16.8709 84.6178 17.6328C83.5295 19.2105 81.6425 20 78.958 20C77.1251 20 75.5568 19.5821 74.2507 18.7479C72.7991 17.8052 72.0648 16.5353 72.0469 14.9384H75.9922C75.9922 15.6466 76.3001 16.1999 76.9173 16.5983C77.4614 16.9437 78.1323 17.1153 78.9309 17.1153C79.6381 17.1153 80.2505 16.9751 80.767 16.6937C81.2846 16.4128 81.5432 16.0457 81.5432 15.5921C81.5432 14.9932 80.7712 14.5221 79.2298 14.1774C76.9446 13.6513 75.5026 13.2432 74.9039 12.9525C73.3617 12.209 72.591 11.0663 72.591 9.52411C72.591 8.61714 72.8086 7.7922 73.244 7.04841C73.6794 6.30464 74.414 5.71067 75.4478 5.26598C76.4821 4.82151 77.5973 4.59928 78.795 4.59928C80.4272 4.59928 81.7966 4.98974 82.9031 5.76954C84.1729 6.64005 84.853 7.87409 84.9441 9.46945H81.1621C80.9619 8.18223 80.1093 7.53784 78.6043 7.53784C77.9874 7.53784 77.4522 7.67386 76.9992 7.94621C76.5453 8.21795 76.3188 8.56323 76.3188 8.97991C76.3188 9.52411 77.0987 9.96887 78.6585 10.3133C80.9261 10.8212 82.3863 11.2297 83.039 11.5378C84.5994 12.2997 85.3795 13.4334 85.3795 14.9384Z" fill="#111111"/>
            <path d="M90.4976 19.5099H86.3887V15.5374H90.4976V19.5099Z" fill="#111111"/>
            </svg>
          </a>
        </div>
        <div class="sb-header-mobile__right">
        ${domToStr(createHeaderAvatarButton({ initials: 'SN', opened: avatarOpened }))}
        </div>
      </div>

      <div class="sb-header-mobile__menu-dropdown">
      ${domToStr(createHeaderMobileMenu(menuDropdownData))}
      </div>

      <div class="sb-header-mobile__avatar-dropdown">
      ${domToStr(createHeaderDropdown(avatarDropdownData))}
      </div>

      <div class="sb-header-mobile__search">
      ${domToStr(createHeaderSearch({ placeholder: 'Search' }))}
      </div>
    </div>
	`)
}
