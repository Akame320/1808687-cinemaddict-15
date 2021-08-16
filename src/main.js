import {appFooter, appHeader, appMain, render} from './utils/dom-utils';
import Profile from './view/profile/profile';
import FilmsCount from './view/films-count/films-count';
import {importFilms, importComments} from './model/film-card/film-card';

import Movies from './presenter/movies';

const mainMovies = new Movies(appMain);
mainMovies.start(importFilms, importComments);

render(appHeader, new Profile().getElement());
render(appFooter, new FilmsCount().getElement());
