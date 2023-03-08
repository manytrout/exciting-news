// Script for navigation bar toggle - Hamburger Menu

// Responsive Menu - Dropdown
const btnMenu = document.getElementById('btn-menu');
const bar = document.getElementById('bar');
const nav = document.getElementById('site-navigation');

btnMenu.addEventListener('click', openMenu);
// Prevents the focus state from activating
btnMenu.addEventListener('mousedown', function (e) {
  e.preventDefault();
});

function openMenu() {
  btnMenu.classList.toggle('menu-on');
  nav.classList.toggle('toggled');
}