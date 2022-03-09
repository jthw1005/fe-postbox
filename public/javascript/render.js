import { DomElementFinder } from "./customDomApi.js";
import { createMailBoxHTML, createVillageHTML } from "./template.js";
import { setStyle } from "./util.mjs";

/* 리팩토링 해야함 */
const renderMap = (town, parentNode) => {
  const finder = new DomElementFinder(parentNode);
  if (town.mailBox) {
    parentNode.innerHTML += createMailBoxHTML(town.name);
    const targetNode = finder.getNodeByDataset("mailBoxName", town.name);
    setStyle(targetNode, {
      background: `#FF8577`,
      width: `${town.mailBox.width * 6}px`,
      height: `${town.mailBox.height * 6}px`,
      left: `${(town.mailBox.leftTop.x - town.leftTop.x) * 6}px`,
      top: `${(town.mailBox.leftTop.y - town.leftTop.y) * 6}px`,
    });
  }

  if (town.isEmpty()) {
    return;
  }
  town.innerVillages.forEach((village) => {
    parentNode.innerHTML += createVillageHTML(village.name);
    const targetNode = finder.getNodeByDataset("villageName", village.name);
    setStyle(targetNode, {
      width: `${village.width * 6}px`,
      height: `${village.height * 6}px`,
      left: `${(village.leftTop.x - town.leftTop.x) * 6}px`,
      top: `${(village.leftTop.y - town.leftTop.y) * 6}px`,
    });
    renderMap(village, targetNode);
  });
};

export { renderMap };
