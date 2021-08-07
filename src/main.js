import {createMenu} from './view/menu/menu';
import {createSort} from './view/sort/sort';
import {createFilms} from './view/films/films';
import {createFilmCard} from './view/film-card/film-card';
import {createProfile} from './view/profile/profile';
import {createFilmsCount} from './view/films-count/films-count';
import {createComment, createFilm} from './mocks/films-data';
import {createPopup} from './view/popup/popup';
import {createShowMoreButtonTemplate} from './view/show-more-button/show-more-button';

const FILMS_COUNT = 13;
const FILMS_INITIAL_APP_SHOW = 5;
const COUNT_FILMS_IN_ROW = 5;
const COMMENTS_COUNT = 5;

const headerContainer = document.querySelector('header');
const bodyContainer = document.querySelector('.main');
const footerContainer = document.querySelector('footer');

let showsFilmsCardInMainList = FILMS_INITIAL_APP_SHOW;

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

const films = new Array(FILMS_COUNT).fill(null).map(createFilm);
const comments = new Array(COMMENTS_COUNT).fill(null).map(createComment);

for (let i = 0; i < FILMS_INITIAL_APP_SHOW; i++){
  render(mainFilmsList, createFilmCard(films[i]));
}


render(mainFilmsList, createShowMoreButtonTemplate(), 'afterend');

const showMoreFilmsCard = () => {
  if(showsFilmsCardInMainList !== films.length){
    let i = showsFilmsCardInMainList;

    while(showsFilmsCardInMainList < showsFilmsCardInMainList + COUNT_FILMS_IN_ROW && films[i]){
      render(mainFilmsList, createFilmCard(films[i]));
      i++;
    }

    showsFilmsCardInMainList += COUNT_FILMS_IN_ROW;
  }
};

document.querySelector('.films-list__show-more').addEventListener('click', showMoreFilmsCard);


const compareByRating = (first, second) => second.rate - first.rate;
const compareByComments = (first, second) => second.comments - first.comments;


const topRateFilms = films.slice().sort(compareByRating).slice(0, 2);
const topMostComments = films.slice().sort(compareByComments).slice(0, 2);

for (const film of topRateFilms){
  render(topRateFilmsList, createFilmCard(film));
}
for (const film of topMostComments){
  render(mostCommentsFilmsList, createFilmCard(film));
}


render(footerContainer, createPopup(films[0], comments[0]));

render(footerContainer, createFilmsCount);


