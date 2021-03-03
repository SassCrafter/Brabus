import anime from 'animejs/lib/anime.es.js';

export function mobileTogglerAnimation(el) {
	if (!el.classList.contains('active')) return;
	console.log("HEY")
	const tl = anime.timeline({duration: 300, easing: 'easeInOutQuad'});
	const lines = el.querySelectorAll('.line');
	tl
	.add({
		targets: el.querySelector('.line--middle'),
		translateX: '-120%',
		translateZ: 0,
	})
	.add({
		targets: el.querySelector('.line--top'),
		top: '50%',
		width: {
			value: '100%',
			delay: 300,
		},
		rotate: {
			value: 45,
			delay: 300,
		}
	})
	.add({
		targets: el.querySelector('.line--bot'),
		top: '50%',
		width: {
			value: '100%',
			delay: 300,
		},
		rotate: {
			value: -45,
			delay: 300,
		}
	}, 300)
}