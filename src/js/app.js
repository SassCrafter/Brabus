import '../sass/style.scss';
import './vendors/locomotiveScroll.js';
import VanillaTilt from 'vanilla-tilt';
import barba from '@barba/core';

import NavigationMenu from './navigationMenu.js';
import HeroSlider from './vendors/heroSlider';

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

const workItems = document.querySelectorAll('.works__item');
const worksSection = document.querySelector('.works');

workItems.forEach((item) => {
	item.addEventListener('mouseenter', (e) => {
		worksSection.style.backgroundColor = e.target.dataset.bg;
	});
	item.addEventListener('mouseleave', () => {
		worksSection.style.backgroundColor = document.body.style.backgroundColor;
	});
})

const heroSlider = new HeroSlider();

changeNavOnScroll();

hidePreloader();

barba.init({
	transitions: [

	{
		name: 'default',

		leave() {
			const done = this.async();
			console.log("Leaving");
			showPreloader(() => {
				console.log("CALLBACK");
				done();
			});
		},
		enter() {
			console.log("Entering");
			 hidePreloader();
			 if (navMenu.isOpen) navMenu.hide();
		}
	}

	]
})