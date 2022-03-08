import { Village } from "./Village.js";
import { MailBox } from "./MailBox.js";

const creatObject = async () => {
  const response = await fetch("./data.json");
  const jsonData = await response.json();

  return jsonData.data.map((element) => {
    switch (element.dataType) {
      case "Village":
        return new Village(element.name, element.coor);
      case "MailBox":
        return new MailBox(element.coor);
    }
  });
};
