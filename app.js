import { DomElementFinder } from "./public/javascript/customDomApi.js";
import {
  buildVillageTree,
  creatObject,
  insertMailBox,
} from "./public/javascript/objFactory.js";
import { renderMap } from "./public/javascript/render.js";

const finder = new DomElementFinder();
const villageData = await creatObject("villages");
const mailBoxData = await creatObject("mailBox");

const villageTree = buildVillageTree(villageData);
const mapTree = insertMailBox(villageTree, mailBoxData);
const map = finder.getElementByClassName("map");
renderMap(mapTree, map);
