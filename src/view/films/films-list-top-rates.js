import {createFilmTitle} from './films-title';

export const createFilmsListTopRates = () => (
  `<section class='films-list films-list--extra'>
      ${createFilmTitle('Top rated')}
      <div class='films-list__container' id='topRatesList'></div>
    </section>`
);
