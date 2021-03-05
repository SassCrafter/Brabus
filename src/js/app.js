import '../sass/style.scss';
import { changeNavOnScroll } from './nav';
import VanillaTilt from 'vanilla-tilt';
import './vendors/locomotiveScroll.js';
import { zoomEffect } from './vendors/zoomInOutEffect';
import HeroSlider from './vendors/heroSlider';
import { hidePreloader } from './animations';

import NavigationMenu from './navigationMenu.js';

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