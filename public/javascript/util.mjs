const calcWidth = (leftTop, rightBot) => {
  return rightBot.x - leftTop.x;
};

const calcHeight = (leftTop, rightBot) => {
  return rightBot.y - leftTop.y;
};

const calcSize = (leftTop, rightBot) => {
  return calcWidth(leftTop, rightBot) * calcHeight(leftTop, rightBot);
};

const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export { calcWidth, calcHeight, calcSize, fetchData };
