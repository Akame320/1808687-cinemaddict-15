import {createElement} from "../../utils/utils";

const createPopupCommentTemplate = (comment) => (
  `<li class="film-details__comment">
        <span class="film-details__comment-emoji">
            <img src="${comment.avatar}" width="55" height="55" alt="emoji-sleeping">
        </span>
      <div>
        <p class="film-details__comment-text">${comment.comment}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${comment.name}</span>
          <span class="film-details__comment-day">${comment.timeUp}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
  </li>
`
);

export default class PopupComment {
  constructor(comment) {
    this._element = null;
    this._comment = comment;
  }

  getTemplate() {
    return createPopupCommentTemplate(this._comment);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
