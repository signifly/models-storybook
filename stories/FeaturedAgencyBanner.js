import { strToDom } from '../utilities/dom';

//@formatter:off
export const createFeaturedAgencyBanner =
({
	imgSrc,
	iconSrc,
	title,
	titleTag,
	location,
	tags,
	insights,
	isHovered,
	hoverSliderProgress,
	hoverButtonUrl,
	hoverButtonText
}) =>
{
	let tagsHtml = '';
	if (tags.length > 0) {
		tagsHtml = tags.map(tag => `<span>${tag}</span>`).join('');
	}

	let insightsHtml = '';
	if (insights.length > 0) {
		insightsHtml = insights.map(insight => `<div class="sb-featured-agency-banner__insight"><p class="sb-featured-agency-banner__insight-number">${insight.number}</p><p class="sb-featured-agency-banner__insight-title">${insight.title}</p></div>`).join('');
	}

	//@formatter:on
	return strToDom(`
		<div class="sb-featured-agency-banner ${isHovered ? 'sb-featured-agency-banner--hovered' : ''}">
			<div class="sb-featured-agency-banner__img">
				<img src="${imgSrc}" alt="${title}">
			</div>
			<div class="sb-featured-agency-banner__content">
				<div class="sb-featured-agency-banner__info">
					<div class="sb-featured-agency-banner__icon">
						<img src="${iconSrc}" alt="${title}">
					</div>
					<div class="sb-featured-agency-banner__header">
						<${titleTag} class="sb-featured-agency-banner__title">${title}</${titleTag}>
						<div class="sb-featured-agency-banner__location">
							<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
							  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.64081 14.0307C8.42855 14.2412 8.21493 14.453 8.0013 14.6666C7.78768 14.453 7.57405 14.2412 7.3618 14.0307C4.9245 11.6138 2.66797 9.37617 2.66797 6.66662C2.66797 3.7211 5.05578 1.33328 8.0013 1.33328C10.9468 1.33328 13.3346 3.7211 13.3346 6.66662C13.3346 9.37617 11.0781 11.6138 8.64081 14.0307ZM10.0013 6.66662C10.0013 7.77119 9.10587 8.66662 8.0013 8.66662C6.89673 8.66662 6.0013 7.77119 6.0013 6.66662C6.0013 5.56205 6.89673 4.66662 8.0013 4.66662C9.10587 4.66662 10.0013 5.56205 10.0013 6.66662Z" fill="#999999"/>
							</svg>
							<p>${location}</p>
						</div>
					</div>
					${tagsHtml ? `<div class="sb-featured-agency-banner__tags">${tagsHtml}</div>` : ''}
					${insightsHtml ? `<div class="sb-featured-agency-banner__insights">${insightsHtml}</div>` : ''}
				</div>
			</div>
			<div class="sb-featured-agency-banner__hover">
				<div class="sb-featured-agency-banner__hover-content">
					<div class="sb-featured-agency-banner__hover-header">
						<div class="sb-featured-agency-banner__hover-progress">
							<div class="sb-featured-agency-banner__hover-progress-bar" style="--progress: ${hoverSliderProgress}%"></div>
							<div class="sb-featured-agency-banner__hover-progress-bar" style="--progress: 0%"></div>
							<div class="sb-featured-agency-banner__hover-progress-bar" style="--progress: 0%"></div>
						</div>
					</div>
					<div class="sb-featured-agency-banner__hover-bottom">
						<p class="sb-featured-agency-banner__title sb-featured-agency-banner__hover-title">${title}</p>
						<div class="sb-featured-agency-banner__hover-button">
							<a href="${hoverButtonUrl}">${hoverButtonText}</a>
						</div>
					</div>
				</div>
				<div class="sb-featured-agency-banner__arrow-container sb-featured-agency-banner__arrow-container--left">
					<button class="sb-featured-agency-banner__arrow sb-featured-agency-banner__arrow--left">
						<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							 <circle cx="12" cy="12" r="12" fill="white"/>
							 <path d="M14 8L10 12L14 16" stroke="#111111" stroke-linecap="square"/>
						</svg>
					</button>
				</div>
				<div class="sb-featured-agency-banner__arrow-container sb-featured-agency-banner__arrow-container--right">
					<button class="sb-featured-agency-banner__arrow sb-featured-agency-banner__arrow--right">
						<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							 <circle cx="12" cy="12" r="12" fill="white"/>
							 <path d="M10 16L14 12L10 8" stroke="#111111" stroke-linecap="square"/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	`);
};
