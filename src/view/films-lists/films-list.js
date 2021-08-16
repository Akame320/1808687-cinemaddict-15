import AbstractView from '../interfaces/abstract';
import {render} from '../../utils/dom-utils';

const createFilmsListTemplate = () => (
  `<section class='films-list'>
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
        <div class='films-list__container'></div>
    </section>`
);

export default class FilmsList extends AbstractView {
  getTemplate() {
    return createFilmsListTemplate();
  }

  setFilmCard(filmCard) {
    const containerCard = this.getElement().querySelector('.films-list__container');
    render(containerCard, filmCard);
  }
}
