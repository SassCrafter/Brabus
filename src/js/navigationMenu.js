import { toggleClasses, removeClasses } from './utils';
import { mobileTogglerAnimation } from './animations';
export default class {
	constructor() {
		this.toggleClass = 'active';
		this.init();
	}

	get isOpen() {
		return this.toggler.classList.contains(this.toggleClass);
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

	hide() {
		removeClasses([this.toggler, this.menu], this.toggleClass);
	}
}