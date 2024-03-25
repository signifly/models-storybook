import { strToDom } from '../utilities/dom';

//@formatter:off
export const createAgencyCard =
	({
		imgSrc,
		iconSrc,
		title,
		titleTag,
		locations,
		tags,
		insights,
		isHover = false,
		isSelected,
		selectedTitle,
		selectedContent,
		selectedButtonUrl,
		selectedButtonText
}) => {
	//@formatter:on
		const classes = ['sb-agency-card'];

		if (!imgSrc) {
			classes.push('sb-agency-card--no-image');
		}

		if (!iconSrc) {
			classes.push('sb-agency-card--no-icon');
		}

		if (isHover) {
			classes.push('sb-agency-card--hover');
		}

		if (isSelected) {
			classes.push('sb-agency-card--selected');
		}

		return strToDom(`
										<div class="${classes.join(' ')}">
											${imgSrc || iconSrc ? `
												<button class="sb-agency-card__favorite-button">
													<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														 <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.1547 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" fill="#111111" fill-opacity="0.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
												</button>
											` : ''}
											${imgSrc ? `
												<div class="sb-agency-card__image">
													<div class="sb-agency-card__image-arrow sb-agency-card__image-arrow--left">
														<button>
															<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															  <circle cx="12" cy="12" r="12" transform="rotate(-180 12 12)" fill="white"/>
															  <path d="M13.9961 7.99628L9.99609 11.9963L13.9961 15.9963" stroke="#111111" stroke-linecap="square"/>
															</svg>
														</button>
													</div>
													<div class="sb-agency-card__image-wrapper">
														<img src="${imgSrc}" alt="${title}" />
													</div>
													<div class="sb-agency-card__image-arrow sb-agency-card__image-arrow--right">
														<button>
															<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															  <circle cx="12" cy="12" r="12" fill="white"/>
															  <path d="M10 16L14 12L10 8" stroke="#111111" stroke-linecap="square"/>
															</svg>
														</button>
													</div>
												</div>
											` : ''}
											${iconSrc ? `
												<div class="sb-agency-card__icon">
													<img src="${iconSrc}" alt="${title}" />
												</div>
											` : ''}
											<div class="sb-agency-card__content">
												<div class="sb-agency-card__content-header">
													<${titleTag} class="sb-agency-card__content-title">${title}</${titleTag}>
													${locations.length > 0 ? `
														<div class="sb-agency-card__content-location">
																<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
																		  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.64081 14.0307C8.42855 14.2412 8.21493 14.4531 8.0013 14.6667C7.78768 14.4531 7.57405 14.2412 7.3618 14.0307C4.9245 11.6139 2.66797 9.37623 2.66797 6.66668C2.66797 3.72116 5.05578 1.33334 8.0013 1.33334C10.9468 1.33334 13.3346 3.72116 13.3346 6.66668C13.3346 9.37623 11.0781 11.6139 8.64081 14.0307ZM10.0013 6.66668C10.0013 7.77125 9.10587 8.66668 8.0013 8.66668C6.89673 8.66668 6.0013 7.77125 6.0013 6.66668C6.0013 5.56211 6.89673 4.66668 8.0013 4.66668C9.10587 4.66668 10.0013 5.56211 10.0013 6.66668Z" fill="#999999"/>
																		</svg>
																${locations.map(location => !location.isLink
		                                                        ? `<span class="sb-agency-card__content-location-item">${location.title}</span>`
		                                                        : `<button class="sb-agency-card__content-location-item">${location.title}</button>`).join('')}
														</div>
													` : ''}
												</div>
												${tags.length > 0 ? `
													<div class="sb-agency-card__content-tags">
														${tags.map(tag => !tag.isLink
		                                          ? `<span class="sb-agency-card__content-tag">${tag.title}</span>`
		                                          : `<button class="sb-agency-card__content-tag">${tag.title}</button>`).join('')}
													</div>` : ''}
												${insights.length > 0 ? `
													<div class="sb-agency-card__content-insights">
														${insights.map(insight => `
															<div class="sb-agency-card__content-insight">
																<p class="sb-agency-card__content-insight-number">${insight.number}</p>
																<p class="sb-agency-card__content-insight-title">${insight.title}</p>
															</div>
														`).join('')}
												</div>` : ''}
											</div>
											${isSelected ? `
											<div class="sb-agency-card__selected-content">
												<div class="sb-agency-card__selected-content__header">
													<button class="sb-agency-card__selected-content__close">
														<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														  <path d="M15 6L10 12L15 18" stroke="#111111" stroke-width="1.25" stroke-linecap="square"/>
														</svg>
													</button>
													<p class="sb-agency-card__selected-title">${selectedTitle}</p>
												</div>
												<div class="sb-agency-card__selected-content__body">
													${selectedContent.map(content => `
														<div class="sb-agency-card__selected-content__body-item">
															<p class="sb-agency-card__selected-content__body-item-title">${content.title}</p>
														</div>
													`).join('')}
												</div>
												<div class="sb-agency-card__selected-content__footer">
													<a href="${selectedButtonUrl}" class="sb-agency-card__selected-button">${selectedButtonText}</a>
												</div>
											</div>` : ''}
										</div>
									`);
	};
