import { DomElementFinder } from "./customDomApi.js";
import { mergeSort } from "./mergeSort.js";
import { renderAnswer } from "./render.js";

const setButtonClickEvent = (btnNode, mailBoxData) => {
  btnNode.addEventListener("click", (e) => manageClickEvent(e, mailBoxData));
};

const manageClickEvent = (e, mailBoxData) => {
  const villages = findMailbox();
  paintVillageBorder(villages);
  const sortedData = mergeSort(
    mailBoxData.map((data) => [data.village.name, data.size])
  );
  const sortedName = sortedData.map(([name, _]) => name);
  renderAnswer(`${villages.join(", ")} 총 ${villages.length}개의 마을입니다.`);
  renderAnswer(`우체통의 크기는 ${sortedName.join(", ")} 순입니다.`);
};

const findMailbox = () => {
  const finder = new DomElementFinder();
  const mailBoxArr = finder.getAllElementsByClassName("mailbox");
  const villageName = mailBoxArr.map(
    (mailBoxNode) => mailBoxNode.dataset.mailBoxName
  );
  return villageName;
};

const paintVillageBorder = (villages) => {
  const finder = new DomElementFinder();
  villages.forEach((name) => {
    const villageNode = finder.getNodeByDataset("villageName", name);
    villageNode.classList.add("selected");
  });
};

export { setButtonClickEvent };
