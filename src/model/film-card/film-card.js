import {getRandomInt} from "../../utils/utils";
import {createComment, createFilm} from "../../mocks/films-data";

const FILMS_COUNT = 13;
const COMMENTS_COUNT = 13;

const films = new Array(FILMS_COUNT).fill(null).map(createFilm);
const comments = new Array(COMMENTS_COUNT).fill(null).map(createComment);

for (let i = 0 ; i < films.length; i++){
  const id = `${getRandomInt(0, 99999)}-${getRandomInt(0, 99999)}-${getRandomInt(0, 99999)}`;
  films[i].id = id;
  comments[i].id = id;
}

for (let i = 0 ; i < films.length; i++){
  films[i].comments = comments[i].comments.length;
}

export {films as importFilms, comments as importComments}
