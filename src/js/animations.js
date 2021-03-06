import anime from 'animejs/lib/anime.es.js';


export function showPreloader(callback) {
	const tl = anime.timeline({duration: 500, easing: 'easeInOutQuad'});
	tl
	.add({
		targets: '.preloader',
		scaleY: [0, 1],
		translateZ: 0
	})
	.add({
		targets: '.preloader__layer',
		translateY: ['100%', 0],
		translateZ: 0,
		delay: anime.stagger(100),
	})
	.add({
		targets: '.preloader__inner img',
		opacity: [0, 1],
		translateY: [50, 0],
		translateZ: 0,

		complete: callback,
	})
}

export function hidePreloader() {
	const tl = anime.timeline({duration: 500, easing: 'easeInOutQuad'});
	tl
	.add({
		targets: '.preloader__inner img',
		opacity: [1, 0],
		translateY: 50,
		translateZ: 0,
		delay: 1000
	})
	.add({
		targets: '.preloader__layer',
		translateY: '100%',
		translateZ: 0,
		delay: anime.stagger(100),
	})
	.add({
		targets: '.preloader',
		scaleY: [1,0],
		translateZ: 0,
	})
}

export function opacity(el, value) {
	anime({
		targets: el,
		opacity: value,
		duration: 200,
	})
}