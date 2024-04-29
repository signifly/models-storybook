import { strToDom } from "../utilities/dom";

export const createAgencyNewsCard = ({
  type,
  title,
  subTitle,
  imageSrc,
  people,
  expandable = false,
  tagsExpandable = false,
  tagsExpanded = false,
  tags = [],
  displayRole = false,
  playButton = false,
}) => {
  const peopleToShow = expandable ? people.slice(0, 2) : people;
  const tagsToShow = tagsExpandable ? tags.slice(0, 2) : tags;
  const remainingTags = tags.slice(2);
  let seeAllRow = "";
  if (expandable) {
    seeAllRow = `
      <div class="sb-agency-news-card__see-all">
        <span>+${people.length - 2}</span>
        <button>SEE ALL</button>
      </div>
    `;
  }

  return strToDom(`
    <div class="sb-agency-news-card">
      <div class="sb-agency-news-card__image-wrapper">
        <image src="${imageSrc}" alt="" class="sb-agency-news-card__image"/>
        ${
          playButton
            ? `
          <div class="sb-agency-news-card__icon-wrapper">
            <span class="play-button-icon sb-agency-news-card__icon"></span> 
          </div>
        `
            : ""
        }
      </div>
      <div class="sb-agency-news-card__info-wrapper">
        <div class="sb-agency-news-card__info">
          ${type ? `<p class="sb-agency-news-card__subtitle">${type}</p>` : ""}
          <p class="sb-agency-news-card__title">${title}</p>
          ${
            subTitle
              ? `<p class="sb-agency-news-card__subtitle">${subTitle}</p>`
              : ""
          }
          ${
            tags.length > 0
              ? `<div class="sb-agency-news-card__tags">
            ${tagsToShow.map((tag) => `<span>${tag}</span>`).join("")}
            ${
              tagsExpandable && remainingTags.length > 0
                ? `<button class="sb-agency-people-card__tags--expand-button">${
                    "+" + remainingTags.length
                  }</button>`
                : ""
            }
          </div>`
              : ""
          }
          <div class="sb-agency-news-card__people">
            ${peopleToShow
              .map(
                (person) => `
              <div class="sb-agency-news-card__person">
                <div class="sb-agency-news-card__person--left-side">
                  <img src="${
                    person.avatarSrc
                  }" alt="Agency person" class="sb-agency-news-card__avatar"/>
                  <span class="sb-agency-news-card__name">${person.name}</span>
                </div>
                ${
                  displayRole
                    ? `<span class="sb-agency-news-card__role">${person.role}</span>`
                    : ""
                }
              </div>
            `
              )
              .join("")}
            ${seeAllRow}
          </div>
        </div>
        <div class="${[
          "sb-agency-news-card__info-expanded",
          tagsExpanded
            ? "sb-agency-news-card__info-expanded--show"
            : "sb-agency-news-card__info-expanded--hide",
        ].join(" ")}">
          ${type ? `<p class="sb-agency-news-card__subtitle">${type}</p>` : ""}
          <p class="sb-agency-news-card__title">${title}</p>
          ${
            subTitle
              ? `<p class="sb-agency-news-card__subtitle">${subTitle}</p>`
              : ""
          }
          ${
            tags.length > 0
              ? `<div class="sb-agency-news-card__tags">
            ${tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>`
              : ""
          }
          <div class="sb-agency-news-card__people">
            ${peopleToShow
              .map(
                (person) => `
              <div class="sb-agency-news-card__person">
                <div class="sb-agency-news-card__person--left-side">
                  <img src="${
                    person.avatarSrc
                  }" alt="Agency person" class="sb-agency-news-card__avatar"/>
                  <span class="sb-agency-news-card__name">${person.name}</span>
                </div>
                ${
                  displayRole
                    ? `<span class="sb-agency-news-card__role">${person.role}</span>`
                    : ""
                }
              </div>
            `
              )
              .join("")}
            ${seeAllRow}
          </div>
        </div>
      </div>
    </div>
  `);
};
