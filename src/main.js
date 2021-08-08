import Menu from './view/menu/menu';
import {render, renderPosition, RenderContainers, getRandomInt} from './utils/utils';
import Sort from './view/sort/sort';
import FilmCard from './view/film-card/film-card';
import Profile from './view/profile/profile';
import FilmsCount from './view/films-count/films-count';
import Container from './view/container/container';
import FilmsList from './view/films-lists/films-list';
import FilmsListExtra from './view/films-lists/films-list-extra';
import ShowMoreButton from './view/show-more-button/show-more-button';
import {importFilms, importComments} from "./model/film-card/film-card";

const FILMS_INITIAL_APP_SHOW = 5;
const COUNT_FILMS_IN_ROW = 5;

const films = importFilms.slice();
const comments = importComments.slice();

console.log(comments)

const TOP_RATES_LISTS = {
  title: 'Top rated',
  id: 'topRatesList',
};

const MOST_COMMENTS_LISTS = {
  title: 'Most commented',
  id: 'mostCommentsList',
};

let showFilmsCardInMainList = FILMS_INITIAL_APP_SHOW;

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

for (let i = 0; i < FILMS_INITIAL_APP_SHOW; i++) {
  render(mainFilmsList, new FilmCard(films[i]).getElement());
}

render(mainFilmsList, new ShowMoreButton().getElement(), renderPosition.AFTER);

const showMoreFilmsCard = () => {
  let i = showFilmsCardInMainList;

  while (i < showFilmsCardInMainList + COUNT_FILMS_IN_ROW && films[i]){
    render(mainFilmsList, new FilmCard(films[i]).getElement());
    i++;
  }

  showFilmsCardInMainList += COUNT_FILMS_IN_ROW;
};

document.querySelector('.films-list__show-more').addEventListener('click', showMoreFilmsCard);


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


