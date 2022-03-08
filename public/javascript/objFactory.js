import { Village } from "./Village.js";
import { MailBox } from "./MailBox.js";
import { fetchData } from "./util.mjs";

const creatObject = async (url) => {
  const jsonData = await fetchData(url);
  return jsonData.data.map((element) => {
    switch (element.dataType) {
      case "Village":
        return new Village(element.name, element.coor);
      case "MailBox":
        return new MailBox(element.coor);
    }
  });
};

export { creatObject };
