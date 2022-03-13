import { DomElementFinder } from "./public/javascript/customDomApi.js";
import { setButtonClickEvent } from "./public/javascript/eventHandler.js";
import { buildVillageTree, creatObject, insertMailBox } from "./public/javascript/objFactory.js";
import { renderMap } from "./public/javascript/render.js";
import { fetchData, port } from "./public/javascript/util.mjs";

const finder = new DomElementFinder();
try {
  const jsonData = await fetchData(port);
  const villageData = creatObject(jsonData, "villages");
  const mailBoxData = creatObject(jsonData, "mailBox");
  const villageTree = buildVillageTree(villageData);
  const mapTree = insertMailBox(villageTree, mailBoxData);
  const map = finder.getElementByClassName("map");
  renderMap(mapTree, map);
  const button = finder.getElementByClassName("check-btn");
  setButtonClickEvent(button, mailBoxData);
} catch (error) {
  console.log(error);
}
