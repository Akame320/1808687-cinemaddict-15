import {createCommentTemplate} from './comment';

const createFilmDetailsRow = (title, text) => (
  `<tr class="film-details__row">
      <td class="film-details__term">${title}</td>
         <td class="film-details__cell">
            ${text}
         </td>
   </tr>`
);


export const createPopup = (dataFilm, dataComments) => (
  `
  <section class="film-details">
    <form class="film-details__inner" action="" method="get">
        <div class="film-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>

          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="${dataFilm.poster}" alt="">

              <p class="film-details__age">${dataFilm.ageСategory}+</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${dataFilm.filmName}</h3>
                  <p class="film-details__title-original">Original: ${dataFilm.filmName}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${dataFilm.rate}</p>
                </div>
              </div>

              <table class="film-details__table">
                ${createFilmDetailsRow('Director', dataFilm.directors)}
                ${createFilmDetailsRow('Writers', dataFilm.writers)}
                ${createFilmDetailsRow('Actors', dataFilm.actors)}
                ${createFilmDetailsRow('Release Date', '30 March 1945')}
                ${createFilmDetailsRow('Runtime', dataFilm.duration)}
                ${createFilmDetailsRow('Country', dataFilm.country)}
                ${createFilmDetailsRow('Genres', dataFilm.categories.map((category) => `<span class="film-details__genre">${category}</span>`).join(''))}
              </table>

              <p class="film-details__film-description">
                ${dataFilm.description}
              </p>
            </div>
          </div>

        <section class="film-details__controls">
        <button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
        <button type="button" class="film-details__control-button film-details__control-button--active film-details__control-button--watched" id="watched" name="watched">Already watched</button>
        <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
      </section>
    </div>

        <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${dataFilm.comments}</span></h3>

        <ul class="film-details__comments-list">
            ${dataComments.map((comment) => createCommentTemplate(comment))}
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
    </div>
  </form>
</section>
  `
);
