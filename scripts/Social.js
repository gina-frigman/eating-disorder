export default class Social {
    constructor(data, templateSelector) {
        this._templateSelector = templateSelector;
        this._title = data.title;
        this._link = data.link;
        this._image = data.image;
    }

    _getTemplate() {
        const card = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.social')
        .cloneNode(true);
        return card;
    }

    generateCard() {
        this._card._getTemplate();
        document.querySelector('.main__link').textContent = this._title;
        document.querySelector('.main__link').href = this._link; // maybe .src
        document.querySelector('.social__icon').src = this._image;
    }
}