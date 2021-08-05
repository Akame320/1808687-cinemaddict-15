import {createButtonDelete} from './comment-button-delete'
export const createCommentRow = (data) => (
  `
    <li class="film-details__comment">
        <span class="film-details__comment-emoji">
            <img src="${data.avatar}" width="55" height="55" alt="emoji-sleeping">
        </span>
      <div>
        <p class="film-details__comment-text">${data.comment}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${data.name}</span>
          <span class="film-details__comment-day">${data.timeUp}</span>
          ${createButtonDelete()}
        </p>
      </div>
    </li>
  `
);
