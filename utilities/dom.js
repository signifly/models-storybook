/**
 * Transform a string into a DOM element
 *
 * @param {string} str
 * @return {HTMLElement}
 */
export function strToDom(str) {
	const parser = new DOMParser();
	const doc = parser.parseFromString(str, 'text/html');
	return doc.body;
}

/**
 * Transform a DOM element into a string
 *
 * @param {HTMLElement} dom
 * @returns {string}
 */
export function domToStr(dom) {
	const parser = new XMLSerializer();
	return parser.serializeToString(dom);
}