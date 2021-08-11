import Menu from './view/menu/menu';
import {render, RenderPosition} from './utils/dom-utils';
import Sort from './view/sort/sort';
import FilmCard from './view/film-card/film-card';
import Profile from './view/profile/profile';
import FilmsCount from './view/films-count/films-count';
import Container from './view/container/container';
import FilmsList from './view/films-lists/films-list';
import FilmsListExtra, {ExtraLists} from './view/films-lists/films-list-extra';
import ShowMoreButton from './view/show-more-button/show-more-button';
import {importFilms, importComments} from './model/film-card/film-card';
import FilmDetailsPopup from './view/popup/film-details-popup';

const FILMS_BATCH_COUNT = 5;
let showFilmsCard = 0;

const appHeader = document.querySelector('header');
const appMain = document.querySelector('main');
const appBody = document.querySelector('body');
const appFooter = document.querySelector('footer');

const films = importFilms.slice();
const comments = importComments.slice();

render(appHeader, new Profile().getElement());

const container = new Container().getElement();

render(appMain, new Menu().getElement());
render(appMain, new Sort().getElement());
render(appMain, container);
render(container, new FilmsList().getElement());

const topRatedList = new FilmsListExtra(ExtraLists.TOP_RATED);
const mostCommentList = new FilmsListExtra(ExtraLists.MOST_COMMENTED);

render(container, topRatedList.getElement());
render(container, mostCommentList.getElement());

const topRateFilms = films.slice().sort((first, second) => second.rate - first.rate).slice(0, 2);
const topMostComments = films.slice().sort((first, second) => second.comments - first.comments).slice(0, 2);

topRatedList.setFilmsCard(topRateFilms);
mostCommentList.setFilmsCard(topMostComments);

const mainFilmsList = appMain.querySelector('#mainFilmList');

const showDetailsPopup = (evt, film) => {

  const isClickPoster = evt.target.matches('.film-card__poster');
  const isClickTitle = evt.target.matches('.film-card__title');
  const isClickCountComments = evt.target.matches('.film-card__comments');

  if (isClickPoster || isClickTitle || isClickCountComments) {
    let filmComments = [];

    for (let i = 0; i < comments.length; i++) {
      if (film.id === comments[i].id) {
        filmComments = comments[i];
      }
    }

    appBody.classList.add('hide-overflow');

    const filmDetailsPopup = new FilmDetailsPopup(film, filmComments);
    filmDetailsPopup.initClickClose();
    render(appFooter, filmDetailsPopup.getElement(), RenderPosition.AFTER);
  }
};

const renderCardInMainList = () => {
  const renderFilms = films.slice(showFilmsCard, showFilmsCard + FILMS_BATCH_COUNT);

  for (const film of renderFilms) {
    const filmCard = new FilmCard(film);
    filmCard.setPopupShowListener(showDetailsPopup);
    render(mainFilmsList, filmCard.getElement());
  }

  showFilmsCard += FILMS_BATCH_COUNT;
};

renderCardInMainList();

const showMoreButton = new ShowMoreButton();
showMoreButton.setCardShowListener(renderCardInMainList);
render(mainFilmsList, showMoreButton.getElement(), RenderPosition.AFTER);

render(appFooter, new FilmsCount().getElement());

// console.log(new Abstract());
