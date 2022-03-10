import { calcHeight, calcSize, calcWidth } from "./util.mjs";

export class MailBox {
  constructor(coordinate) {
    this.leftTop = coordinate.leftTop;
    this.rightBot = coordinate.rightBot;
    this.width = calcWidth(this.leftTop, this.rightBot);
    this.height = calcHeight(this.leftTop, this.rightBot);
    this.size = this.setSize();
    this.village = undefined;
  }

  setSize() {
    return calcSize(this.leftTop, this.rightBot);
  }

  setVillage(name) {
    this.village = name;
  }
}
