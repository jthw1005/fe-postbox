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

app.get("/data/", (req, res) => {
  const jsonData = createJsonData();
  if (Object.keys(jsonData).length === 0) {
    return res.status(404).end();
  }

  res.json(JSON.stringify(jsonData));
});

app.listen(PORT, () => {
  console.log("서버 시작 : " + app.get("port"));
});
