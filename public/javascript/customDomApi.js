import { $body } from "./util.mjs";

class DomElementFinder {
  constructor(rootNode = $body) {
    this.root = rootNode;
  }

  getNodeByDataset(param, value) {
    const searchRec = (node) => {
      if (!node) {
        return;
      }
      if (node.dataset[param] === value) {
        return node;
      }
      for (const childNode of [...node.children]) {
        /* 향후 리펙토링 */
        const ret = searchRec(childNode);
        if (ret) {
          return ret;
        }
        ////////////////
      }
    };
    return searchRec(this.root);
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
