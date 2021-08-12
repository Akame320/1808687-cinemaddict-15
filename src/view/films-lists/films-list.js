import AbstractView from '../interfaces/abstract';

const createFilmsListTemplate = () => (
  `<section class='films-list'>
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
        <div class='films-list__container' id='mainFilmList'></div>
    </section>`
);

export default class FilmsList extends AbstractView {
  getTemplate() {
    return createFilmsListTemplate();
  }
}
