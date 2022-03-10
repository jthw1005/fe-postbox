const $body = document.children[0].children[1];

const calcWidth = (leftTop, rightBot) => {
  return Math.abs(rightBot.x - leftTop.x);
};

const calcHeight = (leftTop, rightBot) => {
  return Math.abs(rightBot.y - leftTop.y);
};

const calcSize = (leftTop, rightBot) => {
  return calcWidth(leftTop, rightBot) * calcHeight(leftTop, rightBot);
};

const fetchData = async (dataType) => {
  const response = await fetch(`./${dataType}.json`);
  return response.json();
};

export { $body, calcWidth, calcHeight, calcSize, fetchData };
