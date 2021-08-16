import Abstract from '../view/interfaces/abstract';

const RenderPosition = {
  AFTER_BEGIN: 'afterbegin',
  BEFORE_END: 'beforeend',
  AFTER: 'after',
};

const render = (container, element, position = RenderPosition.BEFORE_END) => {

  if (container instanceof Abstract) {
    container = container.getElement();
  }

  if (element instanceof Abstract) {
    element = element.getElement();
  }

  switch (position) {
    case RenderPosition.BEFORE_END:
      container.append(element);
      break;
    case RenderPosition.AFTER_BEGIN:
      container.prepend(element);
      break;
    case RenderPosition.AFTER:
      container.after(element);
      break;
  }
};

const createElement = (elementTemplate) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = elementTemplate;

  return newElement.firstChild;
};

const appHeader = document.querySelector('header');
const appMain = document.querySelector('main');
const appBody = document.querySelector('body');
const appFooter = document.querySelector('footer');

export {render, createElement, RenderPosition, appHeader, appMain, appBody, appFooter};
