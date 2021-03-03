export function toggleClasses(els, classNames) {
	els.forEach((el) => {
		classNames.split(' ').forEach((className) => {
			el.classList.toggle(className);
		});
	});
}