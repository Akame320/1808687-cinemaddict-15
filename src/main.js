import {createMenu} from './view/menu/menu';
import {createSort} from './view/sort/sort';
import {createFilms} from './view/films/films';
import {createFilmCart} from './view/film-cart/film-card';
import {createProfile} from './view/profile/profile';
import {createFilmsCount} from './view/films-count/films-count';

const MAIN_FILMS_LIST_CARTS_COUNT = 5;
const FILMS_LIST_CARTS_COUNT = 2;

const headerContainer = document.querySelector('header');
const bodyContainer = document.querySelector('.main');
const footerContainer = document.querySelector('footer');

const render = (container, domElement, place = 'beforeend') => {
  container.insertAdjacentHTML(place, domElement);
};

render(headerContainer, createProfile());

render(bodyContainer, createMenu());
render(bodyContainer, createSort());
render(bodyContainer, createFilms());

const mainFilmsList = bodyContainer.querySelector('#mainFilmList');
const topRateFilmsList = bodyContainer.querySelector('#topRatesList');
const mostCommentsFilmsList = bodyContainer.querySelector('#mostCommentsList');

for (let i = 0 ; i < MAIN_FILMS_LIST_CARTS_COUNT; i++){
  render(mainFilmsList, createFilmCart());
}

for (let i = 0 ; i < FILMS_LIST_CARTS_COUNT; i++){
  render(topRateFilmsList, createFilmCart());
  render(mostCommentsFilmsList, createFilmCart());
}

render(footerContainer, createFilmsCount);


