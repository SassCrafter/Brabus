import LocomotiveScroll from 'locomotive-scroll';
import { opacity } from '../animations';
import { scaleValue } from '../utils';

export const scroll = new LocomotiveScroll();


export function opacityScroll() {
	scroll.on('scroll', (args) => {
	const currentEl = args.currentElements['hero'];
	console.log(currentEl);
	if (typeof currentEl === 'object') {
		const progress = currentEl.progress;
		const overlay = currentEl.el.querySelector('.overlay');
		let opacityValue = scaleValue(progress, [0.5, 1], [0, 1]);
		console.log(opacityValue);	
		opacity(overlay, opacityValue);
		
	}
});
}