export default class Disorder {
    constructor(data, templateSelector) {
        this._templateSelector = templateSelector;
        this._title = data.title;
        this._description = data.description;
    }

    _getTemplate() {
        const card = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.type_disorder') // maybe .type
        .cloneNode(true);
        return card;
    }

    generateCard() {
        this._card._getTemplate();
        document.querySelector('.type__term').textContent = this._title;
        document.querySelector('.type__definition').href = this._description;
    }
}