var menu = document.querySelector('.menu ul');
var showMenu = document.querySelector('.show_menu');
showMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
})