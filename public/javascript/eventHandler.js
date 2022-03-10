import { DomElementFinder } from "./customDomApi.js";

const setButtonClickEvent = (btnNode, mailBoxData) => {
  btnNode.addEventListener("click", (e) => manageClickEvent(e, mailBoxData));
};

const manageClickEvent = (e, mailBoxData) => {
  const findMailbox = () => {
    const finder = new DomElementFinder();
    const mailBoxArr = finder.getAllElementsByClassName("mailbox");
    const villageName = mailBoxArr.map(
      (mailBoxNode) => mailBoxNode.dataset.mailBoxName
    );
    villageName.forEach((name) => {
      const villageNode = finder.getNodeByDataset("villageName", name);
      villageNode.classList.add("selected");
    });
  };
  findMailbox();
};

export { setButtonClickEvent };
