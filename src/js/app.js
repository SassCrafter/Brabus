import '../sass/style.scss';
// import './vendors/locomotiveScroll.js';
import VanillaTilt from 'vanilla-tilt';
import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import fslightbox from 'fslightbox';

import NavigationMenu from './navigationMenu.js';
import HeroSlider from './vendors/heroSlider';

import { scroll, opacityScroll, scrollReveal } from './vendors/locomotiveScroll';
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
scrollReveal();
hidePreloader();
changeBgOnHover();
checkLinks();




// Barba settings

function checkLinks() {
	const links = document.querySelectorAll('a[href]');
	const cbk = (e) => {
	 if(e.currentTarget.href === window.location.href) {
	   e.preventDefault();
	   e.stopPropagation();
	   if (navMenu.isOpen) navMenu.hide();
	   showPreloader(hidePreloader);
	 }

	 if (e.currentTarget.hasAttribute('data-fslightbox')) {
	 	e.preventDefault();
	   	e.stopPropagation();
	   	console.log("IMAGE")
	 }
	};

	for(let i = 0; i < links.length; i++) {
	  links[i].addEventListener('click', cbk);
	}
}



barba.use(barbaPrefetch);

barba.hooks.beforeLeave((data) => {
    scroll.destroy();
});

barba.hooks.after((data) => {
    scroll.init();
    opacityScroll();
    scrollReveal();
	changeBgOnHover();
	checkLinks();
	refreshFsLightbox();
});


barba.init({
	transitions: [

	{
		name: 'default',

		leave() {
			const done = this.async();
			console.log("Leaving ");

			// scroll.destroy();
			showPreloader(() => {
				// console.log("CALLBACK");
				done();
			});
		},
		enter({next}) {
			console.log(next);
			hidePreloader();
			// scroll.init();
			// opacityScroll();
			if (navMenu.isOpen) navMenu.hide();
			if (next.namespace === 'home') {
				 heroSlider.init();
			};
		},
	}

	]
})