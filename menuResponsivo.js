/* código usando jquery
$(document).ready(function () {
    $('.show-menu').click(function () {
        $('.menu').toggleClass('active')
    })
})
*/

let menu = document.querySelector('.menu');
let showMenu = document.querySelector('.show-menu');
/*let hideMenu = document.querySelector('.hide-menu'); */

showMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
    showMenu.classList.toggle('ativo');
})

/*
código com js puro usando o show e hide menu e classList.add e classList.remove

showMenu.addEventListener('click', function () {
    menu.classList.add('active');
})

hideMenu.addEventListener('click', function () {
	menu.classList.remove('active');
})
*/
