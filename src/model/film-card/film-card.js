import {getRandomInt} from '../../utils/utils';
import {createComment, createFilm} from '../../mocks/films-data';

const FILMS_COUNT = 13;
const COMMENTS_COUNT = 13;

const films = new Array(FILMS_COUNT).fill(null).map(createFilm);
const comments = new Array(COMMENTS_COUNT).fill(null).map(createComment);

const randomCompare = () => getRandomInt(0, 10) > 7;

films.forEach((film) => {
  film.comments = comments.slice().filter(randomCompare);
});


export {films as importFilms, comments as importComments};
