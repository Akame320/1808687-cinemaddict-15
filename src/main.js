import Menu from './view/menu/menu';
import {render, renderPosition, RenderContainers} from './utils/utils';
import Sort from './view/sort/sort';
import FilmCard from './view/film-card/film-card';
import Profile from './view/profile/profile';
import FilmsCount from './view/films-count/films-count';
import Container from './view/container/container';
import FilmsList from './view/films-lists/films-list';
import FilmsListExtra from './view/films-lists/films-list-extra';
import ShowMoreButton from './view/show-more-button/show-more-button';
import {importFilms, importComments} from './model/film-card/film-card';
import Popup from "./view/popup/popup";

const FILMS_BATCH_COUNT = 5;
let showFilmsCard = 0;

const TOP_RATES_LISTS = {
  title: 'Top rated',
  id: 'topRatesList',
};

const MOST_COMMENTS_LISTS = {
  title: 'Most commented',
  id: 'mostCommentsList',
};

const films = importFilms.slice();
const comments = importComments.slice();

render(RenderContainers.HEADER, new Profile().getElement());

const container = new Container().getElement();

render(RenderContainers.BODY, new Menu().getElement());
render(RenderContainers.BODY, new Sort().getElement());
render(RenderContainers.BODY, container);
render(container, new FilmsList().getElement());
render(container, new FilmsListExtra(TOP_RATES_LISTS).getElement());
render(container, new FilmsListExtra(MOST_COMMENTS_LISTS).getElement());

const mainFilmsList = RenderContainers.BODY.querySelector('#mainFilmList');
const topRateFilmsList = RenderContainers.BODY.querySelector('#topRatesList');
const mostCommentsFilmsList = RenderContainers.BODY.querySelector('#mostCommentsList');

render(mainFilmsList, new ShowMoreButton().getElement(), renderPosition.AFTER);

const openDetailsPopup = (evt) => {

  const isClickPoster = evt.target.matches('.film-card__poster');
  const isClickTitle = evt.target.matches('.film-card__title');
  const isClickCountComments = evt.target.matches('.film-card__comments');

  if (isClickPoster || isClickTitle || isClickCountComments){
    const popup = new Popup(film, filmComments).getElement();
    render(RenderContainers.FOOTER, popup, renderPosition.AFTER);
  }
};

const renderCardInMainList = () => {
  const renderFilms = films.slice(showFilmsCard, showFilmsCard + FILMS_BATCH_COUNT);

  for (const film of renderFilms) {
    const filmCard = new FilmCard(film);
    filmCard.openPopupListener(openDetailsPopup());
    render(mainFilmsList, filmCard.getElement());
  }

  showFilmsCard += FILMS_BATCH_COUNT;
};

renderCardInMainList();

document.querySelector('.films-list__show-more').addEventListener('click', renderCardInMainList);


const compareByRating = (first, second) => second.rate - first.rate;
const compareByComments = (first, second) => second.comments - first.comments;

const topRateFilms = films.slice().sort(compareByRating).slice(0, 2);
const topMostComments = films.slice().sort(compareByComments).slice(0, 2);

for (const film of topRateFilms) {
  render(topRateFilmsList, new FilmCard(film).getElement());
}
for (const film of topMostComments) {
  render(mostCommentsFilmsList, new FilmCard(film).getElement());
}

render(RenderContainers.FOOTER, new FilmsCount().getElement());


