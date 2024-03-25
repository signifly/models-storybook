import { strToDom, domToStr } from "../utilities/dom";
import { createSocialLink } from "./SocialLink";

export const createAgencyProfileContact = ({
  socialLinks,
  contactLinks,
  address,
  otherLocations,
}) => {
  const soMeLinks =
    socialLinks.links &&
    socialLinks.links.length &&
    document.createElement("div");

  if (soMeLinks) {
    soMeLinks.className = "sb-agency-profile-contact__some-links";
  }

  socialLinks.links.forEach((socialLink) => {
    const socialLinkElement = createSocialLink(socialLink);
    soMeLinks.appendChild(socialLinkElement);
  });

  return strToDom(`
    <div class="sb-agency-profile-contact">
      <div class="sb-agency-profile-contact__social-links">
        <p class="sb-agency-profile-contact__title">${socialLinks.title}</p>
        ${domToStr(soMeLinks)}
      </div>
      <div class="sb-agency-profile-contact__contact-links">
        <p class="sb-agency-profile-contact__title">${contactLinks.title}</p>
        <div class="sb-agency-profile-contact__links">
          ${contactLinks.links
            .map(
              (link) => `
                <div>
                  <div class="sb-agency-profile-contact__label">${link.label}</div>
                  <a href="${link.url}" class="sb-link">${link.text}</a>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="sb-agency-profile-contact__adress">
        <p class="sb-agency-profile-contact__title">${address.title}</p>
        <div class="sb-agency-profile-contact__text">${address.text
          .split("\n")
          .join("<br>")}
        </div>
        <a href="${
          address.mapLink.url
        }" class="sb-agency-profile-contact__label--underline">${
    address.mapLink.text
  }</a>
      </div>
      <div class="sb-agency-profile-contact__other-locations">
        <p class="sb-agency-profile-contact__title">${otherLocations.title}</p>
        <div class="sb-agency-profile-contact__links">
          ${otherLocations.links
            .map(
              (link) => `
                <div>
                  <div class="sb-agency-profile-contact__label">${link.label}</div>
                  <a href="${link.url}" class="sb-link">${link.text}</a>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  `);
};
