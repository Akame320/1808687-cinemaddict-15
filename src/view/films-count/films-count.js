import {createElement} from "../../utils/utils";

const createFilmsCountTemplate = () => (
  `<section class="footer__statistics">
    <p>130 291 movies inside</p>
  </section>`
);

export default class FilmsCount {
  constructor(film) {
    this._element = null;
  }

  getTemplate() {
    return createFilmsCountTemplate();
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
