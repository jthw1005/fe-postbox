import { DomElementFinder } from "./public/javascript/customDomApi.js";
import { setButtonClickEvent } from "./public/javascript/eventHandler.js";
import {
  buildVillageTree,
  creatObject,
  insertMailBox,
} from "./public/javascript/objFactory.js";
import { renderMap } from "./public/javascript/render.js";

const finder = new DomElementFinder();
const villageData = await creatObject(3000, "villages");
const mailBoxData = await creatObject(3000, "mailBox");

const villageTree = buildVillageTree(villageData);
const mapTree = insertMailBox(villageTree, mailBoxData);
const map = finder.getElementByClassName("map");
renderMap(mapTree, map);
const button = finder.getElementByClassName("check-btn");
setButtonClickEvent(button, mailBoxData);
