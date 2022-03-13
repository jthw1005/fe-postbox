import { calcHeight, calcWidth, getRandomNumber, town } from "../public/javascript/util.mjs";

const createJsonData = () => {
  const CHILD_NUM = 10;
  const jsonData = { villages: [town], mailBox: [] };
  let nameID = "A".charCodeAt(0);
  const [villageCoordinateData, mailBoxCoordinateData] = createCoordinateData(town.coordinate, CHILD_NUM);
  villageCoordinateData.forEach((coordinateData) => {
    jsonData.villages.push({ name: String.fromCharCode(nameID), coordinate: coordinateData });
    nameID += 1;
  });
  mailBoxCoordinateData.forEach((coordinateData) => {
    jsonData.mailBox.push({ coordinate: coordinateData });
  });

  return jsonData;
};

const createCoordinateData = (coordinate, CHILD_NUM) => {
  const villageResult = [];
  const mailBoxResult = [];
  const MAX_TRY_COUNT = 1000;
  const recursive = (coordinate) => {
    if (isShort(coordinate, 10)) {
      return;
    }
    const childCoordinates = [];
    let limitCnt = 0;
    while (limitCnt < MAX_TRY_COUNT && childCoordinates.length < CHILD_NUM) {
      const tmpCoordinate = createRandomCoordinate(coordinate);
      if (
        (childCoordinates.length === 0 || isValidateCoordinate(childCoordinates, tmpCoordinate)) &&
        !isShort(tmpCoordinate, 20)
      ) {
        childCoordinates.push(tmpCoordinate);
      }
      limitCnt += 1;
    }
    if (childCoordinates.length > 0) {
      const mailBoxIdx = Math.floor(getRandomNumber(0, childCoordinates.length - 1));
      mailBoxResult.push(childCoordinates.splice(mailBoxIdx, 1).pop());
    }
    villageResult.push(...childCoordinates);
    childCoordinates.forEach((childCoordinate) => {
      recursive(childCoordinate);
    });
  };
  recursive(coordinate);

  return [villageResult, mailBoxResult.slice(1)];
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
    tmp.push(getRandomNumber(parentLeftTop.x + 5, parentRightBot.x - 5));
  }
  [createdCoordinate.leftTop.x, createdCoordinate.rightBot.x] = tmp.sort((a, b) => a - b);
  tmp.length = 0;
  for (let i = 0; i < 2; i += 1) {
    tmp.push(getRandomNumber(parentLeftTop.y + 5, parentRightBot.y - 5));
  }
  [createdCoordinate.leftTop.y, createdCoordinate.rightBot.y] = tmp.sort((a, b) => a - b);

  return createdCoordinate;
};

const isValidateCoordinate = (childCoordinates, tmpCoordinate) => {
  return childCoordinates.every((childCoordinate) => {
    const { leftTop: childLeftTop, rightBot: childRightBot } = childCoordinate;
    const { leftTop: tmpLeftTop, rightBot: tmpRightBot } = tmpCoordinate;

    return (
      childRightBot.x + 20 < tmpLeftTop.x ||
      tmpRightBot.x + 20 < childLeftTop.x ||
      childRightBot.y + 20 < tmpLeftTop.y ||
      tmpRightBot.y + 20 < childLeftTop.y
    );
  });
};

export { createJsonData };
