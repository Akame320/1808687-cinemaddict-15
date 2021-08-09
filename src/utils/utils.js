const getRandomFloat = (minNumber, maxNumber, precision = -1) => {
  if (minNumber < 0 || maxNumber < 0 || maxNumber < minNumber || precision < 0) {
    throw new Error('Ожидаемые аргументы: 0 < minNumber < maxNumber, 0 < precision');
  }
  return +(Math.random() * (maxNumber - minNumber) + minNumber).toFixed(precision);
};

const getRandomInt = (minNumber, maxNumber) => getRandomFloat(minNumber, maxNumber, 0);

const renderPosition = {
  AFTER_BEGIN: 'afterbegin',
  BEFORE_END: 'beforeend',
  AFTER: 'after',
};

const render = (container, element, position = 'beforeend') => {
  switch (position) {
    case 'beforeend':
      container.append(element);
      break;
    case 'afterbegin':
      container.prepend(element);
      break;
    case 'after':
      container.after(element);
      break;
  }
}

const createElement = (elementTemplate) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = elementTemplate;

  return newElement.firstChild;
}

const RenderContainers = {
  HEADER: document.querySelector('header'),
  BODY: document.querySelector('.main'),
  FOOTER: document.querySelector('footer')
}

export {getRandomFloat, getRandomInt, render, createElement, renderPosition, RenderContainers};
