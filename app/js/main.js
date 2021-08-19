// Burger menu
const menuBurger = document.querySelector('.menu-burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

const openMenu = () => {
	menuBurger.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('lock');
};

menuBurger.addEventListener('click', openMenu);
