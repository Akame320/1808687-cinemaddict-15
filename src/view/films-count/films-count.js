import AbstractView from '../interfaces/abstract';

const createFilmsCountTemplate = (filmsCount) => (
  `<section class="footer__statistics">
    <p>${filmsCount} movies inside</p>
  </section>`
);

export default class FilmsCount extends AbstractView {
  constructor(filmsCount) {
    super();

    this._filmsCount = filmsCount;
  }

  getTemplate() {
    return createFilmsCountTemplate(this._filmsCount);
  }
}
