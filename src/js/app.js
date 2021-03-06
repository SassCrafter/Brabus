import '../sass/style.scss';
// import './vendors/locomotiveScroll.js';
import VanillaTilt from 'vanilla-tilt';
import barba from '@barba/core';

import NavigationMenu from './navigationMenu.js';
import HeroSlider from './vendors/heroSlider';

import { scroll, opacityScroll } from './vendors/locomotiveScroll';
import { changeNavOnScroll } from './nav';
import { zoomEffect } from './vendors/zoomInOutEffect';
import { hidePreloader, showPreloader } from './animations';



const navMenu = new NavigationMenu();

// const swiper = new Swiper('.swiper-container',{
// 	loop: true,
// 	grabCursor: true,
// 	on: {
//       beforeInit: function () {
//         this.params.watchSlidesProgress = true;
//       },
//       setTranslate: function () {
//         zoomEffect.setTranslate(this);
//       },
//       setTransition(duration) {
//         zoomEffect.setTransition(this, duration);
//       },
//     },
// });

function changeBgOnHover() {
	const workItems = document.querySelectorAll('.works__item');
	const worksSection = document.querySelector('.works');
	console.log(worksSection);

	workItems.forEach((item) => {
		item.addEventListener('mouseenter', (e) => {
			worksSection.style.backgroundColor = e.target.dataset.bg;
		});
		item.addEventListener('mouseleave', () => {
			worksSection.style.backgroundColor = document.body.style.backgroundColor;
		});
	})
}

const heroSlider = new HeroSlider();

changeNavOnScroll();
opacityScroll();
hidePreloader();
changeBgOnHover();

barba.init({
	transitions: [

	{
		name: 'default',

		leave() {
			const done = this.async();
			console.log("Leaving ");

			scroll.destroy();
			showPreloader(() => {
				// console.log("CALLBACK");
				done();
			});
		},
		enter({next}) {
			console.log(next);
			const done = this.async();
			done();
			hidePreloader();
			scroll.init();
			opacityScroll();
			changeBgOnHover();
			if (navMenu.isOpen) navMenu.hide();
			if (next.namespace === 'home') {
				 heroSlider.init();
			};
		}
	}

	]
})