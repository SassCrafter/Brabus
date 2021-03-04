import '../sass/style.scss';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { zoomEffect } from './vendors/zoomInOutEffect';
import HeroSlider from './vendors/heroSlider';

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

const heroSlider = new HeroSlider()