export const createSocialLink = ({ url, logo, color = '#111111' }) => {
  const link = document.createElement('a')
  link.className = 'sb-social-link'
  link.href = url
  link.target = '_blank'

  const facebookLogo = `<div>
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.6666 8.04889C16.6666 3.60361 13.0849 0 8.66663 0C4.24835 0 0.666626 3.60361 0.666626 8.04889C0.666626 12.0663 3.59209 15.3962 7.41663 16V10.3755H5.38538V8.04889H7.41663V6.27562C7.41663 4.25837 8.611 3.1441 10.4383 3.1441C11.3133 3.1441 12.2291 3.3013 12.2291 3.3013V5.28208H11.2204C10.2266 5.28208 9.91663 5.90257 9.91663 6.53972V8.04889H12.1354L11.7807 10.3755H9.91663V16C13.7412 15.3962 16.6666 12.0663 16.6666 8.04889Z" fill="${color}"/>
  </svg></div>`

  const instagramLogo = `<div>
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33822 1.44091C10.5661 1.44091 10.8299 1.45028 11.7061 1.48779C12.5204 1.52217 12.9601 1.65345 13.2532 1.76284C13.6408 1.90662 13.9209 2.08166 14.2108 2.35984C14.5039 2.64114 14.6831 2.90682 14.8329 3.27877C14.9469 3.56007 15.0837 3.98515 15.1195 4.76343C15.1586 5.60735 15.1684 5.86052 15.1684 7.99531C15.1684 10.1332 15.1586 10.3864 15.1195 11.2272C15.0837 12.0086 14.9469 12.4306 14.8329 12.7119C14.6831 13.0838 14.5007 13.3526 14.2108 13.6308C13.9177 13.9121 13.6408 14.084 13.2532 14.2278C12.9601 14.3372 12.5171 14.4685 11.7061 14.5028C10.8267 14.5403 10.5628 14.5497 8.33822 14.5497C6.11035 14.5497 5.84653 14.5403 4.97036 14.5028C4.15608 14.4685 3.71637 14.3372 3.42323 14.2278C3.03563 14.084 2.75552 13.909 2.46564 13.6308C2.1725 13.3495 1.99336 13.0838 1.84353 12.7119C1.72953 12.4306 1.59273 12.0055 1.5569 11.2272C1.51782 10.3833 1.50805 10.1301 1.50805 7.99531C1.50805 5.85739 1.51782 5.60422 1.5569 4.76343C1.59273 3.98203 1.72953 3.56007 1.84353 3.27877C1.99336 2.90682 2.17575 2.63802 2.46564 2.35984C2.75878 2.07853 3.03563 1.90662 3.42323 1.76284C3.71637 1.65345 4.15934 1.52217 4.97036 1.48779C5.84653 1.45028 6.11035 1.44091 8.33822 1.44091ZM8.33822 0C6.07452 0 5.79115 0.00937683 4.90196 0.0468842C4.01603 0.0843915 3.40694 0.221918 2.87929 0.418832C2.32884 0.625122 1.86307 0.89705 1.40056 1.34401C0.934793 1.78785 0.651424 2.23481 0.436454 2.75991C0.231255 3.26939 0.0879422 3.85075 0.0488568 4.70092C0.00977135 5.55734 0 5.82926 0 8.00156C0 10.1739 0.00977135 10.4458 0.0488568 11.2991C0.0879422 12.1492 0.231255 12.7337 0.436454 13.2401C0.651424 13.7683 0.934793 14.2153 1.40056 14.6591C1.86307 15.103 2.32884 15.378 2.87603 15.5812C3.40694 15.7781 4.01277 15.9156 4.8987 15.9531C5.7879 15.9906 6.07127 16 8.33496 16C10.5987 16 10.882 15.9906 11.7712 15.9531C12.6572 15.9156 13.2662 15.7781 13.7939 15.5812C14.3411 15.378 14.8069 15.103 15.2694 14.6591C15.7319 14.2153 16.0185 13.7683 16.2302 13.2432C16.4354 12.7337 16.5787 12.1524 16.6178 11.3022C16.6569 10.4489 16.6667 10.177 16.6667 8.00469C16.6667 5.83239 16.6569 5.56046 16.6178 4.70717C16.5787 3.857 16.4354 3.27251 16.2302 2.76617C16.025 2.23481 15.7416 1.78785 15.2759 1.34401C14.8134 0.900176 14.3476 0.625122 13.8004 0.421957C13.2695 0.225044 12.6637 0.0875171 11.7777 0.0500098C10.8853 0.00937684 10.6019 0 8.33822 0Z" fill="${color}"/>
<path d="M8.33333 4C5.94094 4 4 5.79164 4 8C4 10.2084 5.94094 12 8.33333 12C10.7257 12 12.6667 10.2084 12.6667 8C12.6667 5.79164 10.7257 4 8.33333 4ZM8.33333 10.5947C6.78124 10.5947 5.52243 9.4327 5.52243 8C5.52243 6.5673 6.78124 5.40532 8.33333 5.40532C9.88542 5.40532 11.1442 6.5673 11.1442 8C11.1442 9.4327 9.88542 10.5947 8.33333 10.5947Z" fill="${color}"/>
<path d="M14 3.66724C14 4.22098 13.5505 4.66724 13 4.66724C12.4463 4.66724 12 4.21772 12 3.66724C12 3.11349 12.4495 2.66724 13 2.66724C13.5505 2.66724 14 3.11675 14 3.66724Z" fill="${color}"/>
</svg></div>`

  const tiktokLogo = `<div>
  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.9601 0H8.19781V10.8985C8.19781 12.1971 7.13544 13.2638 5.81334 13.2638C4.49125 13.2638 3.42885 12.1971 3.42885 10.8985C3.42885 9.6232 4.46764 8.57969 5.74253 8.53333V5.79711C2.93307 5.84347 0.666626 8.09276 0.666626 10.8985C0.666626 13.7276 2.98028 16 5.83696 16C8.69359 16 11.0073 13.7044 11.0073 10.8985V5.31013C12.0461 6.05218 13.3209 6.49276 14.6666 6.51596V3.77971C12.5891 3.71015 10.9601 2.04058 10.9601 0Z" fill="${color}"/>
  </svg></div>`

  const twitterLogo = `<div>
  <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.69831 13.6666C11.7361 13.6666 15.0385 8.53641 15.0385 4.08755C15.0385 3.94183 15.0385 3.79678 15.0289 3.65238C15.6713 3.17579 16.2259 2.5857 16.6666 1.90972C16.0676 2.18211 15.432 2.36067 14.7812 2.43941C15.4665 2.01871 15.9794 1.35693 16.2244 0.57729C15.58 0.969475 14.875 1.24585 14.1399 1.39447C13.645 0.854727 12.9904 0.497323 12.2774 0.377566C11.5645 0.257808 10.8329 0.382372 10.1959 0.731983C9.55897 1.08159 9.05211 1.63676 8.75379 2.31157C8.45547 2.98638 8.38232 3.74322 8.54567 4.46496C7.24056 4.39782 5.9638 4.04996 4.79826 3.44398C3.63273 2.838 2.60447 1.98743 1.78023 0.947482C1.36044 1.68863 1.23187 2.566 1.42069 3.40095C1.60951 4.2359 2.10152 4.96565 2.79655 5.44164C2.27411 5.42594 1.76306 5.2814 1.30663 5.02025V5.06291C1.30683 5.84019 1.56919 6.59348 2.04921 7.19499C2.52922 7.79651 3.19733 8.20922 3.94023 8.36313C3.45695 8.49833 2.94988 8.51809 2.45799 8.42089C2.66784 9.08979 3.07625 9.67472 3.62612 10.0939C4.17599 10.5131 4.83984 10.7456 5.52487 10.7589C4.84425 11.3075 4.06484 11.7132 3.23121 11.9526C2.39758 12.1921 1.5261 12.2606 0.666626 12.1543C2.16785 13.1423 3.91458 13.6664 5.69831 13.664" fill="${color}"/>
</svg></div>`

  const youtubeLogo = `<div>
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2118_1993)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8151 3.53047C16.0633 3.78166 16.2416 4.09399 16.3321 4.43621C16.6666 5.69933 16.6666 8.33341 16.6666 8.33341C16.6666 8.33341 16.6666 10.9675 16.3321 12.2306C16.2416 12.5728 16.0633 12.8852 15.8151 13.1364C15.5669 13.3875 15.2573 13.5688 14.9175 13.6619C13.6666 14.0001 8.66663 14.0001 8.66663 14.0001C8.66663 14.0001 3.66663 14.0001 2.41572 13.6619C2.07591 13.5688 1.7664 13.3875 1.51815 13.1364C1.2699 12.8852 1.09163 12.5728 1.00117 12.2306C0.666626 10.9675 0.666626 8.33341 0.666626 8.33341C0.666626 8.33341 0.666626 5.69933 1.00117 4.43621C1.09163 4.09399 1.2699 3.78166 1.51815 3.53047C1.7664 3.27928 2.07591 3.09806 2.41572 3.00492C3.66663 2.66675 8.66663 2.66675 8.66663 2.66675C8.66663 2.66675 13.6666 2.66675 14.9175 3.00492C15.2573 3.09806 15.5669 3.27928 15.8151 3.53047ZM11.3333 8.33342L7.33329 6.00008V10.6667L11.3333 8.33342Z" fill="${color}"/>
</g>
<defs>
<clipPath id="clip0_2118_1993">
<rect width="16" height="16" fill="white" transform="translate(0.666626)"/>
</clipPath>
</defs>
</svg>
</div>`

  const pinterestLogo = `<div>
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.0007 0.720703C4.43514 0.720703 0.720703 4.43514 0.720703 9.0007C0.720703 12.559 2.97703 15.5996 6.1338 16.7684C6.04288 15.9578 6.05714 14.6304 6.20717 13.9876C6.34766 13.3839 7.11481 10.1403 7.11481 10.1403C7.11481 10.1403 6.88322 9.67647 6.88322 8.99147C6.88322 7.91501 7.50689 7.11185 8.28356 7.11185C8.94415 7.11185 9.26268 7.60779 9.26268 8.202C9.26268 8.86645 8.84024 9.85895 8.62143 10.7788C8.43895 11.5496 9.00784 12.178 9.76755 12.178C11.1432 12.178 12.2006 10.7273 12.2006 8.63365C12.2006 6.78052 10.8693 5.48466 8.96796 5.48466C6.76593 5.48466 5.47334 7.13654 5.47334 8.84382C5.47334 9.50886 5.72937 10.2221 6.04938 10.6103C6.11248 10.6871 6.12171 10.7541 6.10297 10.8321C6.04433 11.0765 5.91394 11.6022 5.88803 11.71C5.85439 11.852 5.7758 11.8815 5.62933 11.8133C4.66244 11.3632 4.05811 9.95005 4.05811 8.81464C4.05811 6.37328 5.83176 4.13075 9.17246 4.13075C11.8577 4.13075 13.9442 6.04373 13.9442 8.6012C13.9442 11.2688 12.2619 13.4155 9.92771 13.4155C9.1433 13.4155 8.40621 13.0079 8.15407 12.5266C8.15407 12.5266 7.76588 14.0043 7.67151 14.3666C7.50863 14.9932 6.81137 16.2912 6.46135 16.8807C7.26207 17.1394 8.11503 17.2807 9.0007 17.2807C13.5664 17.2807 17.2807 13.5664 17.2807 9.0007C17.2807 4.43514 13.5664 0.720703 9.0007 0.720703Z" fill="${color}"/>
</svg></div>`

  switch (logo) {
    case 'facebook':
      link.insertAdjacentHTML('afterbegin', facebookLogo)
      break
    case 'instagram':
      link.insertAdjacentHTML('afterbegin', instagramLogo)
      break
    case 'tiktok':
      link.insertAdjacentHTML('afterbegin', tiktokLogo)
      break
    case 'twitter':
      link.insertAdjacentHTML('afterbegin', twitterLogo)
      break
    case 'youtube':
      link.insertAdjacentHTML('afterbegin', youtubeLogo)
      break
    case 'pinterest':
      link.insertAdjacentHTML('afterbegin', pinterestLogo)
      break
    default:
      break
  }

  return link
}