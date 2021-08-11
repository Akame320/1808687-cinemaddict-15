import AbstractView from '../interfaces/abstract';
import FilmCard from '../film-card/film-card';

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

  setFilmsCard(films) {
    for (const film of films) {
      const filmCard = new FilmCard(film).getElement();
      this.getElement().querySelector('.films-list__container').append(filmCard);
    }
  }
}
