class DomElementFinder {
  constructor(rootNode = document.children[0].children[1]) {
    this.root = rootNode;
  }

  getNodeByDataset(param, value) {
    const searchNode = (node) => {
      if (!node) {
        return;
      }
      if (node.dataset[param] === value) {
        return node;
      }
      for (const childNode of [...node.children]) {
        /* 향후 리펙토링 */
        const ret = searchNode(childNode);
        if (ret) {
          return ret;
        }
        ////////////////
      }
    };
    return searchNode(this.root);
  }

  getElementByClassName(className) {
    return this.getAllElementsByClassName(className)[0];
  }

  getAllElementsByClassName(className) {
    const result = [];
    const searchNode = (node) => {
      if (!node) {
        return;
      }
      if ([...node.classList].includes(className)) {
        result.push(node);
      }
      [...node.children].forEach((childNode) => {
        searchNode(childNode);
      });
    };
    searchNode(this.root);
    return result;
  }
}

export { DomElementFinder };
