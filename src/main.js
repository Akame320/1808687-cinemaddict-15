import {createMenu} from './view/menu/menu';
import {createSort} from './view/sort/sort';
import {createFilms} from './view/films/films';
import {createFilmCard} from './view/film-card/film-card';
import {createProfile} from './view/profile/profile';
import {createFilmsCount} from './view/films-count/films-count';
import {createComment, createFilm} from './mocks/films-data';
import {createPopup} from './view/popup/popup';
import {createShowMoreButtonTemplate} from './view/show-more-button/show-more-button';

const headerContainer = document.querySelector('header');
const bodyContainer = document.querySelector('.main');
const footerContainer = document.querySelector('footer');

let showsFilmsCartInMainList = 5;

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

const films = new Array(13).fill(null).map(createFilm);
const comments = new Array(5).fill(null).map(createComment);

for (let i = 0; i < 5; i++){
  render(mainFilmsList, createFilmCard(films[i]));
}

render(mainFilmsList, createShowMoreButtonTemplate(), 'afterend');

const getTopRatedFilms = () => {
  const allFilms = films.slice(0, films.length - 1);

  for (let i = 0; i < allFilms.length; i++) {
    for (let i1 = 0; i1 < allFilms.length; i1++) {
      if (allFilms[i].rate > allFilms[i1].rate) {
        const el1 = allFilms[i1];
        const el2 = allFilms[i];
        allFilms[i] = el1;
        allFilms[i1] = el2;
      }
    }
  }

  return allFilms.splice(0, 2);
};

const getMostCommentsFilms = () => {
  const allFilms = films.slice(0, films.length - 1);

  for (let i = 0; i < allFilms.length; i++) {
    for (let i1 = 0; i1 < allFilms.length; i1++) {
      if (allFilms[i].comments > allFilms[i1].comments) {
        const el1 = allFilms[i1];
        const el2 = allFilms[i];
        allFilms[i] = el1;
        allFilms[i1] = el2;
      }
    }
  }

  return allFilms.splice(0, 2);
};

const topRateFilms = getTopRatedFilms();
const topMostComments = getMostCommentsFilms();

for (const film of topRateFilms){
  render(topRateFilmsList, createFilmCard(film));
}

for (const film of topMostComments){
  render(mostCommentsFilmsList, createFilmCard(film));
}

const showMoreFilmsCart = () => {
  if(showsFilmsCartInMainList !== films.length){
    let i = showsFilmsCartInMainList;

    while(showsFilmsCartInMainList < showsFilmsCartInMainList + 5 && films[i]){
      render(mainFilmsList, createFilmCard(films[i]));
      i++;
    }

    showsFilmsCartInMainList += 5;
  }
};

document.querySelector('.films-list__show-more').addEventListener('click', showMoreFilmsCart);

render(footerContainer, createPopup(films[0], comments[0]));

render(footerContainer, createFilmsCount);


