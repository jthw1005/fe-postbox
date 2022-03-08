import { calcSize } from "./util.mjs";

export class MailBox {
  constructor(coor) {
    this.leftTop = coor.leftTop;
    this.rightBot = coor.rightBot;
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
