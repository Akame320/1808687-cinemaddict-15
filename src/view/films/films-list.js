import {createFilmTitle} from './films-title';

export const createFilmsList = () => (
  `<section class='films-list'>
        ${createFilmTitle('All movies. Upcoming', 'visually-hidden')}
        <div class='films-list__container' id='mainFilmList'></div>
        <button class='films-list__show-more'>Show more</button>
    </section>`
);
