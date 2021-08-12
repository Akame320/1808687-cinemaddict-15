import AbstractView from '../interfaces/abstract';

const createFilmsTemplate = () => '<section class="films"></section>';

export default class Container extends AbstractView {
  getTemplate() {
    return createFilmsTemplate();
  }
}
