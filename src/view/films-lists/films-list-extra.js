import AbstractView from '../interfaces/abstract';
import {render} from '../../utils/dom-utils';

export const ExtraLists = {
  TOP_RATED: 'Top rated',
  MOST_COMMENTED: 'Most commented',
};

const createFilmsListMostRates = (list) => (
  `<section class='films-list films-list--extra'>
      <h2 class="films-list__title">${list}</h2>
      <div class='films-list__container'></div>
    </section>`
);

export default class FilmsListExtra extends AbstractView {
  constructor(list) {
    super();

    this._element = null;
    this._list = list;
  }

  getTemplate() {
    return createFilmsListMostRates(this._list);
  }

  setFilmCard(filmCard) {
    const containerCard = this.getElement().querySelector('.films-list__container');
    render(containerCard, filmCard);
  }
}
