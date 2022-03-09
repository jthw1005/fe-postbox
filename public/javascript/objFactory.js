import { Village } from "./Village.js";
import { MailBox } from "./MailBox.js";
import { fetchData } from "./util.mjs";

const creatObject = async (dataType) => {
  const jsonData = await fetchData(dataType);
  switch (dataType) {
    case "villages":
      return jsonData.villages.map(
        (element) => new Village(element.name, element.coor)
      );
    case "mailBox":
      return jsonData.mailBox.map((element) => new MailBox(element.coor));
  }
};

export { creatObject };
