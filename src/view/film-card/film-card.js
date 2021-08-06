export const createFilmCard = (data) => {

  const {description} = data;

  const truncateDescription = () => {
    const outDescription = description.join('');
    return outDescription >= 140 ? outDescription : `${outDescription.substr(0, 140)} &hellip;`;
  };

  return `<article class="film-card">
    <h3 class="film-card__title">${data.filmName}</h3>
    <p class="film-card__rating">${data.rate}</p>
    <p class="film-card__info">
      <span class="film-card__year">${data.release}</span>
      <span class="film-card__duration">${data.duration}</span>
      <span class="film-card__genre">${data.categories[0]}</span>
    </p>
    <img src="${data.poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${truncateDescription()}</p>
    <a class="film-card__comments">${data.comments} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
  </article>`;
};
