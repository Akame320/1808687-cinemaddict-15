import {createButtonDelete} from './comment-button-delete';
export const createCommentTemplate = (comment) => (
  `
    <li class="film-details__comment">
        <span class="film-details__comment-emoji">
            <img src="${comment.avatar}" width="55" height="55" alt="emoji-sleeping">
        </span>
      <div>
        <p class="film-details__comment-text">${comment.comment}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${comment.name}</span>
          <span class="film-details__comment-day">${comment.timeUp}</span>
          ${createButtonDelete()}
        </p>
      </div>
    </li>
  `
);
