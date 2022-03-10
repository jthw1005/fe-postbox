import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static("./"));

app.set("port", process.env.PORT || PORT);

app.get("/", (req, res) => {
  res.sendFile(path.resolve() + "/index.html");
});

app.get("/data/:type", (req, res) => {
  switch (req.params.type) {
    case "villages":
      res.sendFile(path.resolve() + "/server/villages.json");
      break;
    case "mailBox":
      res.sendFile(path.resolve() + "/server/mailBox.json");
      break;
    default:
      break;
  }
});

app.listen(app.get("port"), () => {
  console.log("서버 시작 : " + app.get("port"));
});
