export default class Platform {
    constructor(data, templateSelector) {
        this._templateSelector = templateSelector;
        this._title = data.title;
        this._link = data.link;
        this._description = data.description;
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
        document.querySelector('.type__term').textContent = this._title;
        document.querySelector('.type__term').href = this._link; // maybe .src
        document.querySelector('.type__definition').src = this._description;
    }
}