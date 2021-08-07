import {getRandomFloat, getRandomInt} from '../utils/utils';

const filmsNames = ['The Dance of Life', 'Sagebrush Trail', 'The Man with the Golden Arm', 'Santa Claus Conquers the Martians', 'Popeye the Sailor Meets Sindbad the Sailor', 'The Man with the Golden Arm', 'The Great Flamarion', 'Santa Claus Conquers the Martians', 'Made for Each Other'];
const filmsPoster = ['./images/posters/made-for-each-other.png', './images/posters/popeye-meets-sinbad.png', './images/posters/sagebrush-trail.jpg', './images/posters/santa-claus-conquers-the-martians.jpg', './images/posters/the-dance-of-life.jpg', './images/posters/the-great-flamarion.jpg', './images/posters/the-man-with-the-golden-arm.jpg'];
const filmsDescriptions = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];
const filmsCategories = ['music', 'horror', 'comedy', 'Film-Noir', 'Drama', 'Mystery'];
const filmsDirectors = ['Стивен Спилберг', 'Питер Джексон', 'Мартин Скорсезе', 'Кристофер Нолан', 'Стивен Содерберг', 'Ридли Скотт', 'Квентин Тарантино', 'Майкл Манн'];
const filmsWriters = ['Джек Керуак', ' Сэм Райли', 'Уильям Берроуз', ' Вигго Мортенсен', ' Аллен Гинзберг', 'Том Стёрридж', 'Квентин Тарантино', 'Майкл Манн'];
const filmsActors = ['Хит Леджер', ' Мег Райан', 'Том Круз', 'Хоакин Феникс', 'Кристиан Бэйл', 'Рассел Кроу', 'Дженнифер Лоуренс', 'Джонни Депп', 'Бен Кингсли', 'Брэд Питт'];
const filmsCountry = ['USA', 'UK', 'Russia', 'India'];

const commentsAvatar = ['./images/emoji/smile.png', './images/emoji/sleeping.png', './images/emoji/puke.png', './images/emoji/angry.png'];
const commentsTexts = ['Interesting setting and a good cast', 'Booooooooooring', 'Very very old. Meh', 'Almost two hours? Seriously?'];

const getRandomElemFromArray = (array) => array[getRandomInt(0, array.length - 1)];

const getRandomElemsFromArray = (array) => array.filter(() => getRandomInt(0, 1));

const getRandomDuration = () => `${getRandomInt(1, 2)}h ${getRandomInt(0, 59)}m`;

const createRandomId = () => `${getRandomInt(0, 999999)}-${getRandomInt(0, 999999)}-${getRandomInt(0, 999999)}`;

const getRandomDescription = () => {
  return getRandomElemsFromArray(filmsDescriptions).join('');
}

const createFilm = () => {
  const film = {
    poster: getRandomElemFromArray(filmsPoster),
    filmName: getRandomElemFromArray(filmsNames),
    rate: getRandomFloat(0, 10, 1),
    release: getRandomInt(1900, 2021),
    duration: getRandomDuration(),
    categories: getRandomElemsFromArray(filmsCategories),
    description: getRandomDescription(),
    comments: getRandomInt(0, 5),
    directors: getRandomElemFromArray(filmsDirectors),
    writers: getRandomElemsFromArray(filmsWriters),
    actors: getRandomElemsFromArray(filmsActors),
    country: getRandomElemFromArray(filmsCountry),
    ageСategory: getRandomInt(6, 18),
  };

  return film;
};

const getCommentName = () => 'John Doe';

const getRandomComment = () => {
  const randomComment = {
    name: getCommentName(),
    avatar: getRandomElemFromArray(commentsAvatar),
    timeUp: '2019/12/31 23:59',
    comment: getRandomElemFromArray(commentsTexts),
  };

  return randomComment;
};


const createComment = () => new Array(4).fill(null).map(getRandomComment);

export {createFilm, createComment, createRandomId};
