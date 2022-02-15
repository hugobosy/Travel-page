const burger = document.querySelector('.header__nav-burger');
const menu = document.querySelector('.header__nav-list');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
})