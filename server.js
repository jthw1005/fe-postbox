import express from "express";
import cors from "cors";
import path from "path";
import { createJsonData } from "./server/dataCreator.js";
import { port } from "./public/javascript/util.mjs";

const app = express();
const PORT = process.env.PORT || port;

app.use(cors());
app.use(express.static("./"));

app.set("port", PORT);

app.get("/", (req, res) => {
  res.sendFile(path.resolve() + "/index.html");
});

app.get("/data/:type", (req, res) => {
  let resultData;
  switch (req.params.type) {
    case "villages":
      resultData = request("villages");
      break;
    case "mailBox":
      resultData = request("mailBox");
      break;
  }

  if (Object.keys(resultData).length === 0) {
    return res.status(404).end();
  }

  res.json(JSON.stringify(resultData));
});

const request = (() => {
  let jsonData;
  return (type) => {
    switch (type) {
      case "villages":
        jsonData = createJsonData();
        while (jsonData.villages.length === 1) {
          jsonData = createJsonData();
        }
        return jsonData.villages;
      case "mailBox":
        return jsonData.mailBox;
    }
  };
})();

app.listen(PORT, () => {
  console.log("서버 시작 : " + app.get("port"));
});
