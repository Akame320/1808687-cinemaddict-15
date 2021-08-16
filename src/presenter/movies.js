import Sort from './view/sort/sort';
import FilmCard from './view/film-card/film-card';
import FilmsList from './view/films-lists/films-list';
import FilmsListExtra, {ExtraLists} from './view/films-lists/films-list-extra';
import ShowMoreButton from './view/show-more-button/show-more-button';
import FilmDetailsPopup from './view/popup/film-details-popup';

import {render} from '../utils/dom-utils';

const FILMS_BATCH_COUNT = 5;

export default class Movies {
  constructor(mainContainer) {
    this._mainContainer = mainContainer;

    this._sort = new Sort();
    this._filmCard = new FilmCard();
    this._mainMoviesBoard = new FilmsList();
    this._topRatedBoard = new FilmsListExtra(ExtraLists.TOP_RATED);
    this._mostCommentBoard = new FilmsListExtra(ExtraLists.MOST_COMMENTED);
    this._showMoreButton = new ShowMoreButton();
    this._filmDetailsPopup = new FilmDetailsPopup();

    this._handleShowDetailsPopup = this._handleShowDetailsPopup.bind(this);
  }

  start(films) {
    this._films = films;
    this._showFilmsCard = 0;

    render(this._mainContainer, this._sort);
    render(this._mainContainer, this._filmCard);
    render(this._mainContainer, this._mainMoviesBoard);
    render(this._mainContainer, this._topRatedBoard);
    render(this._mainContainer, this._mostCommentBoard);
    render(this._mainContainer, this._showMoreButton);
    render(this._mainContainer, this._filmDetailsPopup);

    this._renderBatchFilmCard(this._showFilmsCard, this._showFilmsCard += FILMS_BATCH_COUNT);
  }

  _renderBatchFilmCard(from, to) {
    this._films
      .slice(from, to)
      .forEach((film) => this._mainMoviesBoard.setFilmsCard(new FilmCard(film)));
  }
}
