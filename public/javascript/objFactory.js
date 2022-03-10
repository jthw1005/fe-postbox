import { Village } from "./Village.js";
import { MailBox } from "./MailBox.js";
import { fetchData } from "./util.mjs";

const creatObject = async (port, dataType) => {
  const jsonData = await fetchData(port, dataType);
  switch (dataType) {
    case "villages":
      return jsonData.villages.map(
        (element) => new Village(element.name, element.coordinate)
      );
    case "mailBox":
      return jsonData.mailBox.map((element) => new MailBox(element.coordinate));
  }
};

const buildVillageTree = (villageData) => {
  const town = villageData.shift();
  const search = (parent, village) => {
    if (parent.isEmpty()) {
      parent.innerVillages.add(village);
      return;
    }
    for (const child of [...parent.innerVillages]) {
      if (child.isParent(village)) {
        search(child, village);
        return;
      }
      if (village.isParent(child)) {
        parent.innerVillages.add(village);
        parent.innerVillages.delete(child);
        search(village, child);
        return;
      }
    }
    parent.innerVillages.add(village);
  };
  villageData.forEach((village) => {
    search(town, village);
  });

  return town;
};

const insertMailBox = (town, mailBoxData) => {
  const search = (village, mailBox) => {
    if (village.isEmpty()) {
      village.mailBox = mailBox;
      mailBox.village = village;
      return;
    }
    for (const child of [...village.innerVillages]) {
      if (child.isParent(mailBox)) {
        search(child, mailBox);
        return;
      }
    }
    village.mailBox = mailBox;
    mailBox.village = village;
  };
  mailBoxData.forEach((mailBox) => {
    search(town, mailBox);
  });
  return town;
};

export { creatObject, buildVillageTree, insertMailBox };
