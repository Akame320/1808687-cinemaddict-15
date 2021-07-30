import {createFilmsList} from './films-list';
import {createFilmsListTopRates} from './films-list-top-rates';
import {createFilmsListMostRates} from './films-list-most-comments';

export const createFilms = () => (
  `<section class='films'>

    ${createFilmsList()}

    ${createFilmsListTopRates()}

    ${createFilmsListMostRates()}
  </section>`
);
