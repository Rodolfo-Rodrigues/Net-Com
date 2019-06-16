let menu = document.querySelector('.menu');
let showMenu = document.querySelector('.show-menu');
let hideMenu = document.querySelector('.hide-menu');

showMenu.addEventListener('click', function () {
	menu.classList.add('active');
})

hideMenu.addEventListener('click', function () {
	menu.classList.remove('active');
})