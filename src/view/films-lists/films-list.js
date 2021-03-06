import {createElement} from '../../utils/dom-utils';

const createFilmsListTemplate = () => (
  `<section class='films-list'>
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
        <div class='films-list__container' id='mainFilmList'></div>
    </section>`
);

export default class FilmsList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsListTemplate();
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
