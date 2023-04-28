// импортируем класс валидации
import FormValidator from "./FormValidator.js";
// объявим селекторы для валидации
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};
// объявим переменные: кнопок
const buttonOpenMenu = document.querySelector('.menu-button');
const buttonOpenPopup = document.querySelector('.contacts__button');
const buttonClosePopup = document.querySelector('.popup__close');
// попапа и формы в нем
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
// меню и разделов в нем
const menu = document.querySelector('.menu_device_phone');
const menuLinks = document.querySelectorAll('.menu__link');
// подключение валидации
const popupValidation = new FormValidator(validationConfig, form);
popupValidation.enableValidation();
// открытие/закрытие меню и попапов
function toggleMenu() {
    menu.classList.toggle('menu_opened');
}
function closeByEsc(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
};
function closeByMouse(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
      }
};
function openPopup() {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
};
function closePopup() {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
};
// сохранение данных
function submit(evt) {
    evt.preventDefault();
    closePopup();
};
// вызов открытия/закрытия попапов и меню
buttonOpenPopup.addEventListener('click', openPopup);
buttonClosePopup.addEventListener('click', closePopup);
popup.addEventListener('mousedown', closeByMouse);
buttonClosePopup.addEventListener('click', () => closePopup); 
buttonOpenMenu.addEventListener('click', toggleMenu);
menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', toggleMenu)
})
// вызовы сохранения данных и добавления карточки пользователя
form.addEventListener('submit', submit);