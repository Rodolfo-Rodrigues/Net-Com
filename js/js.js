let showMenu = document.querySelector('.show_menu').addEventListener('click', clicar)
function clicar(){
	let menu = document.querySelector('.menu ul')
	menu.classList.toggle('active')
}



/*var menu = document.querySelector('.menu ul');
var showMenu = document.querySelector('.show_menu');
showMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
})
*/