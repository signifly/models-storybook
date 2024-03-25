import { strToDom } from "../utilities/dom";

export const createLink = ({ label, url, newTab }) => {
  return strToDom(`
      <a class="sb-link" href="${url}" ${newTab ? 'target="_blank"' : ""}>
        ${label}
      </a>
    `);
};
