import { strToDom, domToStr } from "../utilities/dom";
import { createButton } from "./Button";
import { createLink } from "./Link";

export const createAgencyProfileHeader = ({
  name,
  logo,
  description,
  shortDescription,
  location,
  numOtherLocations,
  numModels,
  numRankedModels,
  sendMessageBtnLabel = "SEND A MESSAGE",
  addFavouriteLinkLabel = "ADD TO FAVOURITES",
  numOtherLocationsLabel = "other locations",
  numModelsLabel = "models & actors",
  numRankedModelsLabel = "ranked models",
  scrolled,
}) => {
  const sendMessageButton = createButton({
    label: sendMessageBtnLabel,
    primary: true,
  });

  const addFavouriteLink = createLink({
    label: `
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4944 4.27985C8.82825 2.332 6.04987 1.80804 3.96233 3.59168C1.87478 5.37532 1.58089 8.35748 3.22025 10.467C4.58326 12.2209 8.70822 15.9201 10.0602 17.1174C10.2114 17.2513 10.287 17.3183 10.3753 17.3446C10.4523 17.3676 10.5365 17.3676 10.6135 17.3446C10.7017 17.3183 10.7773 17.2513 10.9286 17.1174C12.2805 15.9201 16.4055 12.2209 17.7685 10.467C19.4079 8.35748 19.1498 5.35656 17.0264 3.59168C14.903 1.8268 12.1605 2.332 10.4944 4.27985Z" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>${addFavouriteLinkLabel}</span>
    `,
  });

  const classes = ["sb-agency-profile-header"];

  if (scrolled) {
    classes.push("sb-agency-profile-header--scrolled");
  }

  return strToDom(`
    <div class="${classes.join(" ")}">
      <div class="sb-agency-profile-header__logo-wrapper">
        <img src='${logo}' alt='${name}' class='sb-agency-profile-header__logo'/>
        <span class="sb-agency-profile-header__mobile-heading">${name}</span>
      </div> 
      <div class="sb-agency-profile-header__info">
        <h1>${name}</h1>
        <div class="sb-agency-profile-header__subtitle">
          <span>${shortDescription}</span>
          <span>
            <div class="sb-agency-profile-header__location">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.64081 14.0306C8.42855 14.2411 8.21493 14.453 8.0013 14.6666C7.78768 14.453 7.57405 14.2411 7.3618 14.0306C4.9245 11.6138 2.66797 9.37614 2.66797 6.66658C2.66797 3.72107 5.05578 1.33325 8.0013 1.33325C10.9468 1.33325 13.3346 3.72107 13.3346 6.66658C13.3346 9.37614 11.0781 11.6138 8.64081 14.0306ZM10.0013 6.66659C10.0013 7.77115 9.10587 8.66659 8.0013 8.66659C6.89673 8.66659 6.0013 7.77115 6.0013 6.66659C6.0013 5.56202 6.89673 4.66659 8.0013 4.66659C9.10587 4.66659 10.0013 5.56202 10.0013 6.66659Z" fill="#999999"/>
              </svg>
              ${location}
            </div>
          </span>
          <span class="sb-agency-profile-header__subtitle--location">${numOtherLocations}${" "}${numOtherLocationsLabel}</span>
        </div>
        <p class="sb-agency-profile-header__description">${description}</p>
        <button class="sb-agency-profile-header__read-more">Read more</button>
      </div>
      <div class="sb-agency-profile-header__actions">
        ${domToStr(sendMessageButton)}
        <span class="sb-agency-profile-header__favourite-link">
          ${domToStr(addFavouriteLink)}
        </span>
      </div>
      <div class="sb-agency-profile-header__stats">
        <div>
          ${numModels}
          <div class="sb-agency-profile-header__stats--label">${numModelsLabel}</div>
        </div>
        <div>
          ${numRankedModels}
          <div class="sb-agency-profile-header__stats--label">${numRankedModelsLabel}</div>
        </div>
      </div>
    </div>
  `);
};
