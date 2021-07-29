import {createFilmTitle} from './FilmsTitle';

export const createFilms = () => (
  `<section class='films'>

    <section class='films-list'>
        ${createFilmTitle('All movies. Upcoming', 'visually-hidden')}
        <div class='films-list__container' id='mainFilmList'></div>
        <button class='films-list__show-more'>Show more</button>
    </section>

    <section class='films-list films-list--extra'>
      ${createFilmTitle('Top rated')}
      <div class='films-list__container' id='topRatesList'></div>
    </section>

    <section class='films-list films-list--extra'>
      ${createFilmTitle('Most commented')}
      <div class='films-list__container' id='mostCommentsList'></div>
    </section>
  </section>`
);
