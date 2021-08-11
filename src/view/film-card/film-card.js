import AbstractView from '../interfaces/abstract';

const MAX_CHARS_DESCRIPTION = 140;
const MAX_CHARS_FOR_TRUNCATE = 139;

const truncateDescription = (description) => {
  const outDescription = description;
  return outDescription >= MAX_CHARS_FOR_TRUNCATE ? outDescription : `${outDescription.substr(0, MAX_CHARS_DESCRIPTION - 1)} &hellip;`;
};

const createFilmCardTemplate = (film) => (
  `<article class="film-card">
    <h3 class="film-card__title">${film.title}</h3>
    <p class="film-card__rating">${film.rate}</p>
    <p class="film-card__info">
      <span class="film-card__year">${film.release}</span>
      <span class="film-card__duration">${film.duration}</span>
      <span class="film-card__genre">${film.genres[0]}</span>
    </p>
    <img src="${film.poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${truncateDescription(film.description)}</p>
    <a class="film-card__comments">${film.comments} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
  </article>`
);

export default class FilmCard extends AbstractView {
  constructor(film) {
    super();

    this._film = film;
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  setClickHandler(clickHandler) {
    this.getElement().addEventListener('click', (evt) => clickHandler(evt, this._film));
  }
}
