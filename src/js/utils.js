export function toggleClasses(els, classNames) {
	els.forEach((el) => {
		classNames.split(' ').forEach((className) => {
			el.classList.toggle(className);
		});
	});
}

export const removeClasses = (els, classNames) => {
	els.forEach((el) => {
		classNames.split(' ').forEach((className) => {
			el.classList.remove(className);
		});
	});
}

export const addClass = (el, className) => el.classList.add(className);

export const removeClass = (el, className) => el.classList.remove(className);

export function scaleValue(value, from, to) {
	const scale = (to[1] - to[0]) / (from[1] - from[0]);
	const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
	return (capped * scale + to[0]);
}