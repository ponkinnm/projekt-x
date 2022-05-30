/*SIDEBAR*/

const drawerIcon = document.querySelector('.menu-drawer__icon');
const sidebar = document.querySelector('.menu-drawer');
const closeBtn = document.querySelector('.menu-drawer__closeBtn');

drawerIcon.addEventListener('click', () => {
  sidebar.classList.toggle('--is-open');
});
closeBtn.addEventListener('click', () => {
  sidebar.classList.toggle('--is-open');
});
