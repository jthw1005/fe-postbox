const calcWidth = (leftTop, rightBot) => {
  return rightBot.x - leftTop.x;
};

const calcHeight = (leftTop, rightBot) => {
  return rightBot.y - leftTop.y;
};

const calcSize = (leftTop, rightBot) => {
  return calcWidth(leftTop, rightBot) * calcHeight(leftTop, rightBot);
};

export { calcWidth, calcHeight, calcSize };
