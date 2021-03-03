import { toggleClasses } from './utils';
import { mobileTogglerAnimation } from './animations';
export default class {
	constructor() {
		this.toggleClass = 'active';
		this.init();
	}

	init() {
		this.toggler = document.querySelector('.menu-toggler');
		this.menu = document.querySelector('.navigation-menu');
		this.toggler.addEventListener('click', this.handleClick.bind(this));
	}

	handleClick() {
		toggleClasses([this.toggler, this.menu], this.toggleClass);
		//mobileTogglerAnimation(this.toggler);
	}
}