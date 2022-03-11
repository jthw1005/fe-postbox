const port = 3000;
const calcWidth = (leftTop, rightBot) => {
  return Math.abs(rightBot.x - leftTop.x);
};

const calcHeight = (leftTop, rightBot) => {
  return Math.abs(rightBot.y - leftTop.y);
};

const calcSize = (leftTop, rightBot) => {
  return calcWidth(leftTop, rightBot) * calcHeight(leftTop, rightBot);
};

const fetchData = async (port, dataType) => {
  const response = await fetch(`http://localhost:${port}/data/${dataType}`);
  return response.json();
};

const delay = (sec, func) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(func);
    }, sec * 1000);
  });
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { port, calcWidth, calcHeight, calcSize, fetchData, delay, getRandomNumber };
