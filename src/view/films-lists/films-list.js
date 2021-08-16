import AbstractView from '../interfaces/abstract';
import FilmCard from '../film-card/film-card';

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

  setFilmsCard(films) {
    for (const film of films) {
      const filmCard = new FilmCard(film).getElement();
      this.getElement().querySelector('.films-list__container').append(filmCard);
    }
  }
}
