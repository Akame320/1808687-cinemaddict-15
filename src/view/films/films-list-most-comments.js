import {createFilmTitle} from './films-title';

export const createFilmsListMostRates = () => (
  `<section class='films-list films-list--extra'>
      ${createFilmTitle('Most commented')}
      <div class='films-list__container' id='mostCommentsList'></div>
    </section>`
);
