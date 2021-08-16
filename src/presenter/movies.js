import Sort from '../view/sort/sort';
import FilmsList from '../view/films-lists/films-list';
import FilmCard from '../view/film-card/film-card';
import FilmsListExtra, {ExtraLists} from '../view/films-lists/films-list-extra';
import ShowMoreButton from '../view/show-more-button/show-more-button';
import FilmDetailsPopup from '../view/popup/film-details-popup';
import Container from '../view/container/container';

import {appBody, render} from '../utils/dom-utils';

const FILMS_BATCH_COUNT = 5;
const EXTRA_LISTS_CARD_COUNT = 2;

export default class Movies {
  constructor(mainContainer) {
    this._mainContainer = mainContainer;

    this._sort = new Sort();
    this._moviesBoardsContainer = new Container();
    this._mainMoviesBoard = new FilmsList();
    this._topRatedBoard = new FilmsListExtra(ExtraLists.TOP_RATED);
    this._mostCommentBoard = new FilmsListExtra(ExtraLists.MOST_COMMENTED);
    this._showMoreButton = new ShowMoreButton();

    this._handleShowDetailsPopup = this._handleShowDetailsPopup.bind(this);
    this._handleShowCard = this._handleShowCard.bind(this);
  }

  start(films, comments) {
    this._films = films;
    this._comments = comments;

    this._showFilmsCard = 0;

    render(this._mainContainer, this._sort);
    render(this._mainContainer, this._moviesBoardsContainer);
    render(this._moviesBoardsContainer, this._mainMoviesBoard);
    render(this._moviesBoardsContainer, this._showMoreButton);
    render(this._moviesBoardsContainer, this._topRatedBoard);
    render(this._moviesBoardsContainer, this._mostCommentBoard);

    this._showMoreButton.setCardShowListener(this._handleShowCard);

    this._topRateFilms = this._films.slice().sort((first, second) => second.filmInfo.totalRating - first.filmInfo.totalRating);
    this._topMostComments = this._films.slice().sort((first, second) => second.filmInfo - first.filmInfo.comments);

    this._renderBatchFilmCard(this._showFilmsCard, this._showFilmsCard += FILMS_BATCH_COUNT);
    this._renderBatchFilmCard(0, EXTRA_LISTS_CARD_COUNT, this._topRatedBoard, this._topRateFilms);
    this._renderBatchFilmCard(0, EXTRA_LISTS_CARD_COUNT, this._mostCommentBoard, this._topMostComments);
  }

  _renderBatchFilmCard(from, to, container = this._mainMoviesBoard, array = this._films) {
    const addToMainBoardFilmsCard = array.slice(from, to);
    addToMainBoardFilmsCard.forEach((film) => {
      const newFilmCard = new FilmCard(film);
      newFilmCard.setPopupShowListener(this._handleShowDetailsPopup);
      container.setFilmCard(newFilmCard);
    });
  }

  _handleShowDetailsPopup(event, film) {
    const isClickPoster = event.target.matches('.film-card__poster');
    const isClickTitle = event.target.matches('.film-card__title');
    const isClickCountComments = event.target.matches('.film-card__comments');

    if (isClickPoster || isClickTitle || isClickCountComments) {

      appBody.classList.add('hide-overflow');
      this._filmDetailsPopup = new FilmDetailsPopup(film, this._comments);
      this._filmDetailsPopup.initClickClose();
      render(this._mainContainer, this._filmDetailsPopup);
    }
  }

  _handleShowCard() {
    this._renderBatchFilmCard(this._showFilmsCard, this._showFilmsCard += FILMS_BATCH_COUNT);
    if (this._showFilmsCard >= this._films.length) {
      this._showFilmsCard.removeElement();
    }
  }
}
