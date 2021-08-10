const RenderPosition = {
  AFTER_BEGIN: 'afterbegin',
  BEFORE_END: 'beforeend',
  AFTER: 'after',
};

const render = (container, element, position = RenderPosition.BEFORE_END) => {
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

export {render, createElement, RenderPosition};
