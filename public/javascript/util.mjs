const port = 3000;
const town = { name: "town", coordinate: { leftTop: { x: 0, y: 0 }, rightBot: { x: 650, y: 650 } } };
const calcWidth = (leftTop, rightBot) => {
  return Math.abs(rightBot.x - leftTop.x);
};

const calcHeight = (leftTop, rightBot) => {
  return Math.abs(rightBot.y - leftTop.y);
};

const calcSize = (leftTop, rightBot) => {
  return calcWidth(leftTop, rightBot) * calcHeight(leftTop, rightBot);
};

const fetchData = async (port) => {
  try {
    const response = await fetch(`http://localhost:${port}/data`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const delay = (sec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { port, town, calcWidth, calcHeight, calcSize, fetchData, delay, getRandomNumber };
