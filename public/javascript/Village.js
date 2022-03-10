import { calcHeight, calcWidth } from "./util.mjs";

export class Village {
  constructor(name, coordinate) {
    this.name = name;
    this.leftTop = coordinate.leftTop;
    this.rightBot = coordinate.rightBot;
    this.width = calcWidth(this.leftTop, this.rightBot);
    this.height = calcHeight(this.leftTop, this.rightBot);
    this.innerVillages = new Set();
    this.mailBox = null;
  }

  isParent(village) {
    if (
      this.leftTop.x < village.leftTop.x &&
      this.leftTop.y < village.leftTop.y &&
      this.rightBot.x > village.rightBot.x &&
      this.rightBot.y > village.rightBot.y
    ) {
      return true;
    }
    return false;
  }

  isEmpty() {
    return this.innerVillages.size === 0;
  }
}
