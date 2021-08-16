import {getRandomFloat, getRandomInt} from '../utils/utils';

const FILM_NAMES = ['The Dance of Life', 'Sagebrush Trail', 'The Man with the Golden Arm', 'Santa Claus Conquers the Martians', 'Popeye the Sailor Meets Sindbad the Sailor', 'The Man with the Golden Arm', 'The Great Flamarion', 'Santa Claus Conquers the Martians', 'Made for Each Other'];
const FILM_POSTERS = ['./images/posters/made-for-each-other.png', './images/posters/popeye-meets-sinbad.png', './images/posters/sagebrush-trail.jpg', './images/posters/santa-claus-conquers-the-martians.jpg', './images/posters/the-dance-of-life.jpg', './images/posters/the-great-flamarion.jpg', './images/posters/the-man-with-the-golden-arm.jpg'];
const FILM_DESCRIPTIONS = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];
const FILM_GENRE = ['music', 'horror', 'comedy', 'Film-Noir', 'Drama', 'Mystery'];
const FILM_DIRECTORS = ['Стивен Спилберг', 'Питер Джексон', 'Мартин Скорсезе', 'Кристофер Нолан', 'Стивен Содерберг', 'Ридли Скотт', 'Квентин Тарантино', 'Майкл Манн'];
const FILM_WRITERS = ['Джек Керуак', ' Сэм Райли', 'Уильям Берроуз', ' Вигго Мортенсен', ' Аллен Гинзберг', 'Том Стёрридж', 'Квентин Тарантино', 'Майкл Манн'];
const FILM_ACTORS = ['Хит Леджер', ' Мег Райан', 'Том Круз', 'Хоакин Феникс', 'Кристиан Бэйл', 'Рассел Кроу', 'Дженнифер Лоуренс', 'Джонни Депп', 'Бен Кингсли', 'Брэд Питт'];
const FILM_COUNTRYS = ['USA', 'UK', 'Russia', 'India'];

const COMMENT_AVATARS = ['./images/emoji/smile.png', './images/emoji/sleeping.png', './images/emoji/puke.png', './images/emoji/angry.png'];
const COMMENT_TEXTS = ['Interesting setting and a good cast', 'Booooooooooring', 'Very very old. Meh', 'Almost two hours? Seriously?'];

const getRandomElemFromArray = (array) => array[getRandomInt(0, array.length - 1)];

const getRandomElemsFromArray = (array) => array.filter(() => getRandomInt(0, 1));

const getRandomDuration = () => `${getRandomInt(1, 2)}h ${getRandomInt(0, 59)}m`;

const createRandomId = () => `${getRandomInt(0, 999999)}-${getRandomInt(0, 999999)}-${getRandomInt(0, 999999)}`;

const getRandomDescription = () => getRandomElemsFromArray(FILM_DESCRIPTIONS).join('');

const createFilm = () => {
  const film = {
    id: createRandomId(),
    filmInfo: {
      title: getRandomElemFromArray(FILM_NAMES),
      alternativeTitle: getRandomElemFromArray(FILM_NAMES),
      totalRating: getRandomFloat(0, 10, 1),
      ageRating: getRandomInt(6, 18),
      poster: getRandomElemFromArray(FILM_POSTERS),
      release: getRandomInt(1900, 2021),
      duration: getRandomDuration(),
      genres: getRandomElemsFromArray(FILM_GENRE),
      description: getRandomDescription(),
      comments: getRandomInt(0, 5),
      director: getRandomElemFromArray(FILM_DIRECTORS),
      writers: getRandomElemsFromArray(FILM_WRITERS),
      actors: getRandomElemsFromArray(FILM_ACTORS),
      country: getRandomElemFromArray(FILM_COUNTRYS),
    },
    comments: [],
  };

  return film;
};

const getCommentName = () => 'John Doe';

const createComment = () => {
  const filmComment = {
    id: `cmt-${createRandomId()}`,
    author: getCommentName(),
    emotion: getRandomElemFromArray(COMMENT_AVATARS),
    date: '2019/12/31 23:59',
    comment: getRandomElemFromArray(COMMENT_TEXTS),
  };

  return filmComment;
};

export {createFilm, createComment, createRandomId};
