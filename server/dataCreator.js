import { calcHeight, calcWidth, getRandomNumber } from "../public/javascript/util.mjs";

const createJsonData = () => {
  let nameID = "A".charCodeAt(0);
  const jsonData = [{ name: "town", coordinate: { leftTop: { x: 0, y: 0 }, rightBot: { x: 200, y: 200 } } }];
  createCoordinateData().forEach((coordinateData) => {
    jsonData.push({ name: String.fromCharCode(nameID), coordinate: coordinateData });
    nameID += 1;
  });

  return JSON.stringify(jsonData);
};

const createCoordinateData = () => {
  return createData({ leftTop: { x: 0, y: 0 }, rightBot: { x: 200, y: 200 } }, Math.floor(Math.random() * 5));
};

const createData = (coordinate, boxNum) => {
  let result = [];
  let MAX_TRY_COUNT = 1000;
  const recursive = (coordinate) => {
    if (isShort(coordinate, 40)) {
      return;
    }
    const childCoordinates = [];
    let limitCnt = 0;
    while (limitCnt < MAX_TRY_COUNT && childCoordinates.length < boxNum) {
      const tmpCoordinate = createRandomCoordinate(coordinate);
      if (
        (childCoordinates.length === 0 || isValidateCoordinate(childCoordinates, tmpCoordinate)) &&
        !isShort(tmpCoordinate, 20)
      ) {
        childCoordinates.push(tmpCoordinate);
      }
      limitCnt += 1;
    }

    result = [...result, ...childCoordinates];
    childCoordinates.forEach((childCoordinate) => {
      recursive(childCoordinate);
    });
  };
  recursive(coordinate);

  return result;
};

const isShort = (coordinate, limitLength) => {
  const { leftTop, rightBot } = coordinate;
  return calcWidth(leftTop, rightBot) < limitLength || calcHeight(leftTop, rightBot) < limitLength;
};

const createRandomCoordinate = (coordinate) => {
  const { leftTop: parentLeftTop, rightBot: parentRightBot } = coordinate;
  const createdCoordinate = { leftTop: {}, rightBot: {} };
  const tmp = [];
  for (let i = 0; i < 2; i += 1) {
    tmp.push(getRandomNumber(parentLeftTop.x, parentRightBot.x));
  }
  [createdCoordinate.leftTop.x, createdCoordinate.rightBot.x] = tmp.sort((a, b) => a - b);
  tmp.length = 0;
  for (let i = 0; i < 2; i += 1) {
    tmp.push(getRandomNumber(parentLeftTop.y, parentRightBot.y));
  }
  [createdCoordinate.leftTop.y, createdCoordinate.rightBot.y] = tmp.sort((a, b) => a - b);

  return createdCoordinate;
};

const isValidateCoordinate = (childCoordinates, tmpCoordinate) => {
  for (const childCoordinate of childCoordinates) {
    const { leftTop: childLeftTop, rightBot: childRightBot } = childCoordinate;
    const { leftTop: tmpLeftTop, rightBot: tmpRightBot } = tmpCoordinate;

    if (Math.max(childLeftTop.x, childRightBot.x) < Math.min(tmpLeftTop.x, tmpRightBot.x)) {
      return true;
    }
    if (Math.max(tmpLeftTop.x, tmpRightBot.x) < Math.min(childLeftTop.x, childRightBot.x)) {
      return true;
    }
    if (Math.max(childLeftTop.y, childRightBot.y) < Math.min(tmpLeftTop.y, tmpRightBot.y)) {
      return true;
    }
    if (Math.max(tmpLeftTop.y, tmpRightBot.y) < Math.min(childLeftTop.y, childRightBot.y)) {
      return true;
    }
  }
  return false;
};

export { createJsonData };
