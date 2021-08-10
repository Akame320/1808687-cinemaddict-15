import {createElement} from '../../utils/dom-utils';

const createFilmsCountTemplate = (filmsCount) => (
  `<section class="footer__statistics">
    <p>${filmsCount} movies inside</p>
  </section>`
);

export default class FilmsCount {
  constructor(filmsCount) {
    this._element = null;
    this._filmsCount = filmsCount;
  }

  getTemplate() {
    return createFilmsCountTemplate(this._filmsCount);
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
