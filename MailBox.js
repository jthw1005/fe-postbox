import { calcSize } from "./util.mjs";

class MailBox {
  constructor(leftTop, rightBot) {
    this.leftTop = leftTop;
    this.rightBot = rightBot;
    this.size = setSize(leftTop, rightBot);
    this.village = undefined;
  }

  setSize(leftTop, rightBot) {
    return calcSize(leftTop, rightBot);
  }

  setVillage(name) {
    this.village = name;
  }
}
