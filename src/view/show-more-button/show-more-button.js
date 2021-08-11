import Abstract from '../interfaces/abstract';

const createShowMoreButtonTemplate = () => '<button class="films-list__show-more">Show more</button>';

export default class ShowMoreButton extends Abstract {
  constructor() {
    super();

    this.clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createShowMoreButtonTemplate();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.cardShow();
  }

  setCardShowListener(callback) {
    this._callback.cardShow = callback;

    this.getElement().addEventListener('click', this.clickHandler);
  }
}
