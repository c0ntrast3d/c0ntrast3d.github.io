const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

const toggleMenu = () => {
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuNav.classList.toggle('show');
    menuBranding.classList.toggle('show');
    navItems.forEach((item) => {
        item.classList.toggle('show');
    });
    showMenu = !showMenu;
};

window.addEventListener(
    'DOMContentLoaded', (event) => {
        console.log('loaded')
        menuBtn.addEventListener('click', toggleMenu);

    }
);
