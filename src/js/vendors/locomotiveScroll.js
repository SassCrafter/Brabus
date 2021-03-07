import LocomotiveScroll from 'locomotive-scroll';
import { opacity } from '../animations';
import { scaleValue } from '../utils';

export const scroll = new LocomotiveScroll({
	// el: document.querySelector('[data-scroll-container]'),
});


export function opacityScroll() {
	scroll.on('scroll', (args) => {
	const currentEl = args.currentElements['hero'];
	if (typeof currentEl === 'object') {
		const progress = currentEl.progress;
		const overlay = currentEl.el.querySelector('.overlay');
		let opacityValue = scaleValue(progress, [0.5, 1], [0, 1]);
		opacity(overlay, opacityValue);		
	}
});
}

export function scrollReveal() {
	scroll.on('scroll', (args) => {
		const visibleElements = args.currentElements;
		// console.log(visibleElements);
		// visibleElements.forEach(el => {
		// 	el.classList.add('js-reveal');
		// })
	});
}