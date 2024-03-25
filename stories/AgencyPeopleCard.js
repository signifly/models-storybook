import { strToDom, domToStr } from "../utilities/dom";

export const createAgencyPeopleCard = ({
  name,
  imageSrc,
  avatarSrc,
  jobTitle,
  tags,
  showTags = true,
  showFirst = 2,
  expandable = false,
  expanded = false,
}) => {
  const tagsToShow = expandable ? tags.slice(0, showFirst) : tags;
  const remainingTags = expandable ? tags.slice(showFirst) : [];

  return strToDom(`
    <div class="sb-agency-people-card">
      ${
        imageSrc
          ? `
        <div class="sb-agency-people-card__image">
          <div class="sb-agency-people-card__image-arrow sb-agency-people-card__image-arrow--left">
            <button>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" transform="rotate(-180 12 12)" fill="white"/>
                <path d="M13.9961 7.99628L9.99609 11.9963L13.9961 15.9963" stroke="#111111" stroke-linecap="square"/>
              </svg>
            </button>
          </div>
          <div class="sb-agency-people-card__image-wrapper">
            <img src="${imageSrc}" alt="${name}" />
          </div>
          <div class="sb-agency-people-card__image-arrow sb-agency-people-card__image-arrow--right">
            <button>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="white"/>
                <path d="M10 16L14 12L10 8" stroke="#111111" stroke-linecap="square"/>
              </svg>
            </button>
          </div>
        </div>
      `
          : ""
      }
      <div class="sb-agency-people-card__info-wrapper">
        <div class="sb-agency-people-card__info">
          <div class="sb-agency-people-card__info-description">
            ${
              avatarSrc
                ? `<img src='${avatarSrc}' alt='Agency person' class='sb-agency-people-card__avatar'/>`
                : ""
            }
            <div>
              <p class="sb-agency-people-card__name">${name}</p>
              <p class="sb-agency-people-card__job-title">${jobTitle}</p>
            </div>
          </div>
          ${
            showTags
              ? `
              <div class="sb-agency-people-card__tags">
                ${tagsToShow
                  .map(
                    (tag) =>
                      `<span class="sb-agency-people-card__tag">${tag}</span>`
                  )
                  .join("")} 
                ${
                  expandable && remainingTags.length > 0
                    ? `<button class="sb-agency-people-card__tags--expand-button">${
                        "+" + remainingTags.length
                      }</button>`
                    : ""
                }
              </div>
            `
              : ""
          }
        </div>
        <div class="${[
          "sb-agency-people-card__info-expanded",
          expanded
            ? "sb-agency-people-card__info-expanded--show"
            : "sb-agency-people-card__info-expanded--hide",
        ].join(" ")}">
          <div class="sb-agency-people-card__info-description">
            ${
              avatarSrc
                ? `<img src='${avatarSrc}' alt='Agency person' class='sb-agency-people-card__avatar'/>`
                : ""
            }
            <div>
              <p class="sb-agency-people-card__name">${name}</p>
              <p class="sb-agency-people-card__job-title">${jobTitle}</p>
            </div>
          </div>
          ${
            showTags
              ? `
              <div class="sb-agency-people-card__tags">
                ${tags
                  .map(
                    (tag) =>
                      `<span class="sb-agency-people-card__tag">${tag}</span>`
                  )
                  .join("")} 
              </div>
            `
              : ""
          }
        </div>
      </div>
    </div>
  `);
};
