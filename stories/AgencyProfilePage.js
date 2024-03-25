import { strToDom, domToStr } from "../utilities/dom";
import { createAgencyProfileHeader } from "./AgencyProfileHeader";
import { createFooter } from "./Footer";
import { createPreFooter } from "./PreFooter";
import { Dark } from "./PreFooter.stories";
import { Footer } from "./Footer.stories";
import { Default } from "./AgencyProfileHeader.stories";
import { createAgencyPeopleCard } from "./AgencyPeopleCard";

export const createAgencyProfilePage = ({ people }) => {
  const agencyProfileHeader = createAgencyProfileHeader(Default.args);
  const preFooter = createPreFooter(Dark.args);
  const footer = createFooter(Footer.args);
  const cardContainer = document.createElement("div");

  cardContainer.classList.add("sb-grid", "sb-grid--4");
  cardContainer.style.padding = "0";
  cardContainer.style.gridAutoColumns = "min-content";

  people.forEach((person) => {
    cardContainer.appendChild(createAgencyPeopleCard(person));
  });

  return strToDom(`
    <div>
      ${domToStr(agencyProfileHeader)}
      ${domToStr(cardContainer)}
      ${domToStr(preFooter)}
      ${domToStr(footer)}
    </div>
  `);
};
