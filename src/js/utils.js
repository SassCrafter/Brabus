export function toggleClasses(els, classNames) {
	els.forEach((el) => {
		classNames.split(' ').forEach((className) => {
			el.classList.toggle(className);
		});
	});
}

export const addClass = (el, className) => el.classList.add(className);

export const removeClass = (el, className) => el.classList.remove(className);