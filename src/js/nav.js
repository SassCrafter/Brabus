import { addClass, removeClass } from './utils';

const CHANGE_NAV_POSITION = 100;
const CHANGE_CLASS = 'active';

export function changeNavOnScroll() {
	const nav = document.querySelector('.nav');

	window.addEventListener('scroll', (e) => {
		const scrolled = window.pageYOffset || document.body.scrollTop;
		if (scrolled >= CHANGE_NAV_POSITION) addClass(nav, CHANGE_CLASS);
		else removeClass(nav, CHANGE_CLASS)
	});
}