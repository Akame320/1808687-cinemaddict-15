import Popup from "../../view/popup/popup";
import {render, RenderContainers, renderPosition} from "../../utils/utils";
import {importComments} from "../../model/film-card/film-card";

const closePopup = () => {
  const popup = new Popup([], []).removeElement();
}


const allComments = importComments;

const openPopup = (film, evt) => {

  const isClickPoster = evt.target.matches('.film-card__poster');
  const isClickTitle = evt.target.matches('.film-card__title');
  const isClickCountComments = evt.target.matches('.film-card__comments');

  if (isClickPoster || isClickTitle || isClickCountComments) {
    let filmComments = [];
    for (const comments of allComments) {
      if (comments.id === film.id) {
        filmComments = comments.comments.slice();
        break;
      }
    }

    const popup = new Popup(film, filmComments).getElement();
    render(RenderContainers.FOOTER, popup, renderPosition.AFTER);
  }
};

export {closePopup, openPopup}


