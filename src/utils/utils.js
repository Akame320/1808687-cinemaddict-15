const getRandomFloat = (minNumber, maxNumber, precision = -1) => {
  if (minNumber < 0 || maxNumber < 0 || maxNumber < minNumber || precision < 0) {
    throw new Error('Ожидаемые аргументы: 0 < minNumber < maxNumber, 0 < precision');
  }
  return +(Math.random() * (maxNumber - minNumber) + minNumber).toFixed(precision);
};

const getRandomInt = (minNumber, maxNumber) => getRandomFloat(minNumber, maxNumber, 0);

const isEscEvent = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc'){
    return true;
  }

  return false;
};


export {getRandomFloat, getRandomInt, isEscEvent};
