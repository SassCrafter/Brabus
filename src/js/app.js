import '../sass/style.scss';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import NavigationMenu from './navigationMenu.js';

const navMenu = new NavigationMenu();

const swiper = new Swiper('.swiper-container',{
	loop: true,
	grabCursor: true,
});