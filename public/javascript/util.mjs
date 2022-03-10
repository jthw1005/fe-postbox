const $body = document.children[0].children[1];

const setStyle = (e, styles) => {
  for (const property in styles) e.style[property] = styles[property];
};

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

export { $body, setStyle, calcWidth, calcHeight, calcSize, fetchData };
