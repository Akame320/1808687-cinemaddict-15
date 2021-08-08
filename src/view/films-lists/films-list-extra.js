import {createElement} from "../../utils/utils";

export const createFilmsListMostRates = (list) => (
  `<section class='films-list films-list--extra'>
      <h2 class="films-list__title">${list.title}</h2>
      <div class='films-list__container' id='${list.id}'></div>
    </section>`
);

export default class FilmsListExtra {
  constructor(list) {
    this._element = null;
    this._list = list;
  }

  getTemplate() {
    return createFilmsListMostRates(this._list);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
