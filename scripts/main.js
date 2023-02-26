let openMenuButton = document.querySelector('.menu-button_open');
let closeMenuButton = document.querySelector('.menu-button_close')
let menu = document.querySelector('.menu_device_phone')

function menuOpen() {
    menu.classList.add('menu_opened');
};

function menuClose() {
    menu.classList.remove('menu_opened');
};

openMenuButton.addEventListener('click', menuOpen);
closeMenuButton.addEventListener('click', menuClose);