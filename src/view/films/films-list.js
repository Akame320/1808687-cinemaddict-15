import {createFilmTitle} from './films-title';
import {createFilmsShowMore} from "./films-show-more";

export const createFilmsList = () => (
  `<section class='films-list'>
        ${createFilmTitle('All movies. Upcoming', 'visually-hidden')}
        <div class='films-list__container' id='mainFilmList'></div>
        ${createFilmsShowMore()}
    </section>`
);
