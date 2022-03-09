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

const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export { $body, calcWidth, calcHeight, calcSize, fetchData };
