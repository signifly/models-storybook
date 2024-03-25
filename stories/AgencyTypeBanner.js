import { strToDom } from '../utilities/dom';

export const createAgencyTypeBanner = ({imgSrc, url, title, titleTag, tags, hoverTitle, hoverTags, hoverButtonText, isHover}) => {
	return strToDom(`
		<a href="${url}" class="sb-agency-type-banner ${isHover ? 'sb-agency-type-banner--hover' : ''}">
			<div class="sb-agency-type-banner__image">
				<img src="${imgSrc}" alt="${title}" />
			</div>
			<div class="sb-agency-type-banner__content">
				<${titleTag} class="sb-agency-type-banner__title">${title}</${titleTag}>
				<div class="sb-agency-type-banner__tags">
					${tags.map(tag => `<span class="sb-agency-type-banner__tag">${tag}</span>`).join('')}
				</div>
			</div>
			<div class="sb-agency-type-banner__hover">
				<div class="sb-agency-type-banner__hover-content">
					<p class="sb-agency-type-banner__title sb-agency-type-banner__hover-title">${title}</p>
					<div class="sb-agency-type-banner__hover-tags">
						<p class="sb-agency-type-banner__hover-tags-title">${hoverTitle}</p>
						<div class="sb-agency-type-banner__hover-tags-list">
							${hoverTags.map(tag => `<span class="sb-agency-type-banner__tag sb-agency-type-banner__hover-tag">${tag}</span>`).join('')}
						</div>
					</div>
					<div class="sb-agency-type-banner__hover-button">
						<span>${hoverButtonText}</span>
					</div>
				</div>
			</div>
		</a>
	`);
};