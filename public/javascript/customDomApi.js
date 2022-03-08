import { $body } from "./util.mjs";

class DomElementFinder {
  constructor(rootNode = $body) {
    this.root = rootNode;
  }

  getElementByClassName(className) {
    return this.getElementByClassNameAll(className)[0];
  }

  getElementByClassNameAll(className) {
    const result = [];
    const searchRec = (node) => {
      if (!node) {
        return;
      }
      if ([...node.classList].includes(className)) {
        result.push(node);
      }
      [...node.children].forEach((childNode) => {
        searchRec(childNode);
      });
    };
    searchRec(this.root);
    return result;
  }
}

export { DomElementFinder };
