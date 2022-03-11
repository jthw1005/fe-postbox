import express from "express";
import cors from "cors";
import path from "path";
import { createJsonData } from "./server/dataCreator.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static("./"));

app.set("port", PORT);

app.get("/", (req, res) => {
  res.sendFile(path.resolve() + "/index.html");
});

app.get("/data/:type", (req, res) => {
  switch (req.params.type) {
    case "villages":
      res.json(JSON.stringify(request("villages")));
      break;
    case "mailBox":
      res.json(JSON.stringify(request("mailBox")));
      break;
  }
});

const request = (() => {
  let jsonData;
  return (type) => {
    switch (type) {
      case "villages":
        jsonData = createJsonData();
        return jsonData.villages;
      case "mailBox":
        return jsonData.mailBox;
    }
  };
})();

app.listen(PORT, () => {
  console.log("서버 시작 : " + app.get("port"));
});
