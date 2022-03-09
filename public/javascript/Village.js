import { calcHeight, calcWidth } from "./util.mjs";

export class Village {
  constructor(name, coor) {
    this.name = name;
    this.leftTop = coor.leftTop;
    this.rightBot = coor.rightBot;
    this.width = calcWidth(this.leftTop, this.rightBot);
    this.height = calcHeight(this.leftTop, this.rightBot);
    this.innerVillages = new Set();
    this.mailBox = null;
  }
}
