import LocomotiveScroll from 'locomotive-scroll';
import { opacity } from '../animations';
import { scaleValue } from '../utils';

const scroll = new LocomotiveScroll();


scroll.on('scroll', (args) => {
	const currentEl = args.currentElements['hero'];
	if (typeof currentEl === 'object') {
		const progress = currentEl.progress;
		const overlay = currentEl.el.querySelector('.overlay');
		let opacityValue = scaleValue(progress, [0.5, 1], [0, 1]);
		// opacity = progress - 0.52;
		// if (progress > 0.75) opacity = progress; 
		// overlay.style.opacity = opacity;
		// if (progress <= 0.51) opacityValue = 0;
		opacity(overlay, opacityValue);
		
	}
});